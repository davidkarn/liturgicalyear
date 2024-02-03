import cv2
import numpy as np
import os
import sys
import json
import subprocess
import pytesseract


def is_block_inside(inner, outer):
    return (inner[0] >= outer[0]
            and inner[1] >= outer[1]
            and inner[0] + inner[2] <= outer[0] + outer[2]
            and inner[1] + inner[3] <= outer[1] + outer[3])

def block_area(block):
    return block[2] * block[3]

fn = sys.argv[1]
image = cv2.imread(fn)

blurfactor = 25
dilatefactor = 20

isodd = True
if fn.endswith(".png"):
    isodd = False

scale_percent = 30


gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
blur = cv2.GaussianBlur(gray, (blurfactor, blurfactor), 0)
thresh = cv2.threshold(blur, 0, 255, cv2.THRESH_BINARY_INV + cv2.THRESH_OTSU)[1]

kernel = cv2.getStructuringElement(cv2.MORPH_RECT, (4,2))
dilate = cv2.dilate(thresh, kernel, iterations=5)

cnts = cv2.findContours(dilate, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
#thresh = cv2.resize(thresh, (int(image.shape[1] * 0.5), int(image.shape[0] * 0.5)))
#dilate = cv2.resize(dilate, (int(image.shape[1] * 0.5), int(image.shape[0] * 0.5)))

column_blocks = []
wide_blocks = []

cnts = cnts[0] if len(cnts) == 2 else cnts[1]
for c in cnts:
    x,y,w,h = cv2.boundingRect(c)
    ar = w / float(h)
    print([x,y,w,h, ar])
    if ar < 50:
        column_blocks.append([x,y,w,h])


for b in column_blocks:
    for o in column_blocks:
        if b != o and is_block_inside(b, o):
            column_blocks = list(filter(lambda bb: bb != b, column_blocks))
            break

blur = cv2.GaussianBlur(gray, (blurfactor, blurfactor), 0)
thresh = cv2.threshold(blur, 0, 255, cv2.THRESH_BINARY_INV + cv2.THRESH_OTSU)[1]

kernel = cv2.getStructuringElement(cv2.MORPH_RECT, (18,4))
dilate = cv2.dilate(thresh, kernel, iterations=5)

cnts = cv2.findContours(dilate, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
cnts = cnts[0] if len(cnts) == 2 else cnts[1]

for c in cnts:
    x,y,w,h = cv2.boundingRect(c)
    print([x,y,w,h, ar])
    block = [x, y, w, h]
    inner_blocks = list(filter(lambda colblock: is_block_inside(colblock, block), column_blocks))

    if not (len(inner_blocks) >= 2
            and sum(list(map(lambda block: block_area(block), inner_blocks))) > block_area(block) * 0.55):
        wide_blocks.append(block)
        cv2.rectangle(image, (x, y), (x + w, y + h), (255,33,12), 2)
        
        for ib in inner_blocks:
            column_blocks = list(filter(lambda cb: cb != ib, column_blocks))


text_blocks = []
            
for b in column_blocks:
    x,y,w,h = b
    cv2.rectangle(image, (x, y), (x + w, y + h), (36,255,12), 2)
    cv2.drawContours(dilate, [c], -1, (33,33,255), -1)

    data = pytesseract.image_to_string(image[y:y+h,x:x+w], lang='eng',config='--psm 6')
    text_blocks.append([x,y,w,h, data])

for b in wide_blocks:
    x,y,w,h = b
    cv2.rectangle(image, (x, y), (x + w, y + h), (36,255,12), 2)
    cv2.drawContours(dilate, [c], -1, (33,33,255), -1)

    data = pytesseract.image_to_string(image[y:y+h,x:x+w], lang='eng',config='--psm 6')
    text_blocks.append([x,y,w,h, data])

with open(fn + ".json", "w") as outfile:
    json.dump({"fn": fn, "blocks": text_blocks}, outfile)

#cv2.imshow("image", image)
#cv2.waitKey(0)


# cnts = cnts[0] if len(cnts) == 2 else cnts[1]
# paras = []

# for c in cnts:
#     x,y,w,h = cv2.boundingRect(c)
#     print(x,y,w,h)
#     if ((not istomus1 and isodd and x < 600 and x > 50 and w > 1500)
#         or (not istomus1 and not isodd and x < 800 and x > 50 and w > 1500)
#         or (istomus1 and isodd and x < 100 and x > 30 and w > 700)
#         or (istomus1 and not isodd and x  < 200 and x  > 150 and w > 700)):
#         paras.append([x,y,w,h])
#         cv2.rectangle(image, (x, y), (x + w, y + h), (36,255,12), 2)

# image = cv2.resize(image, (int(image.shape[1] * 0.5), int(image.shape[0] * 0.5)))

# print(paras)
# text_x_std = np.std(list(map(lambda x: x[0], list(paras))))
# text_x_mean = np.mean(list(map(lambda x: x[0], list(paras))))
# if not isodd:
#     text_x_std = np.std(list(map(lambda x: x[0] + x[2], list(paras))))
#     text_x_mean = np.mean(list(map(lambda x: x[0] + x[2], list(paras))))

# textblocks = []
# footnotes = []

# for para in paras:
#     if ((not isodd and para[0] + para[2] < text_x_mean)
#         or (isodd and para[0] > text_x_mean)):
#         footnotes.append(para)
#     else:
#         textblocks.append(para)

# print(list(map(lambda x: x[0], list(footnotes))))
# print(list(map(lambda x: x[0], list(textblocks))))

# x_diff = 0
# if len(list(footnotes)) > 0 and len(textblocks) > 0:
#     x_diff = int(np.mean(list(map(lambda x: x[0], list(footnotes))))
#                  - np.mean(list(map(lambda x: x[0], list(textblocks)))))

# toptxtblock = [0, 99999999]
# btmtxtblock = [0, 0]

# for block in textblocks:
#     if block[1] < toptxtblock[1]:
#         toptxtblock = block
#     if block[1] > btmtxtblock[1]:
#         btmtxtblock = block

# textblock = [
#     toptxtblock[0] + x_diff,         toptxtblock[1],
#     toptxtblock[0] + toptxtblock[2], toptxtblock[1],
#     btmtxtblock[0] + x_diff,         btmtxtblock[1] + btmtxtblock[3], 
#     btmtxtblock[0] + btmtxtblock[2], btmtxtblock[1] + btmtxtblock[3]
# ]

# resp = {"text": "",
#         "footnotes": []}

# for block in footnotes:
#     cv2.imwrite(fn + '.writing.png', image[block[1]:(block[1] + block[3]),
#                                            block[0]:(block[2] + block[0])])
#     text = subprocess.getoutput("tesseract -c preserve_interword_spaces=1 --dpi 150 -l lat " + fn + ".writing.png -")
#     resp['footnotes'].append(text)

# cv2.imwrite(fn + '.writing.png', image[textblock[1]:textblock[7], textblock[0]:textblock[6]])
# text = subprocess.getoutput("tesseract --dpi 150 -l lat " + fn + ".writing.png -")
# resp['text'] = text
# json.dump(resp, sys.stdout)    
