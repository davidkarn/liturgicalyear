const fs = require('node:fs');
const {toc} = require('./toc');
enum TextBlockType {
  LatinEnglish,
  English };

type ParsedBlock = {
  x:      number,
  y:      number,
  width:  number,
  height: number,
  text:   string };

type Page = {
  fn:     string,
  blocks: [number, number, number, number, string][] };

enum SegmentType {
  Heading,
  SubHeading,
  EngText,
  EngLatText };

type Segment = {
  block:   ParsedBlock,
  type:    SegmentType,
  english: string,
  latin:   string };

const parse_block = (block: [number, number, number, number, string]): ParsedBlock => {
  return {
    x:      block[0],
    y:      block[1],
    width:  block[2],
    height: block[3],
    text:   block[4] }; };

const connect_pages = (page1: Segment[], page2: Segment[]): Segment[] => {
  page1 = page1.slice(1);
  page2 = page2.slice(1);

  if (page1.at(-1)?.type === SegmentType.EngText
    && page2.at(0)?.type === SegmentType.EngText) {
      
      page1.at(-1).english += page2.at(0).english;
      page2 = page2.slice(1); }

  else if (page1.at(-1)?.type === SegmentType.EngLatText
    && page2.at(0)?.type === SegmentType.EngLatText) {
      
      page1.at(-1).english += page2.at(0).english;
      page1.at(-1).latin   += page2.at(0).latin;
      page2 = page2.slice(1); }

  return page1.concat(page2); };

const parse_page = (path: string): Segment[] => {
  const txt        = fs.readFileSync(path, 'utf8');
  const data: Page = JSON.parse(txt);

  return data.blocks
    .map(parse_block)
    .filter(block => block.text.trim())

    .sort((block1, block2) => (
      (Math.abs(block1.y - block2.y) > 8)
        ? block1.y > block2.y ? 1 : -1
        : block1.x > block2.x ? 1 : -1))

    .reduce((segments: Segment[], block) => [
      ...segments.slice(0,-1),
      
      ...(segments.at(-1) && Math.abs(segments.at(-1).block.y - block.y) < 8
        ? [{...segments.at(-1),
            type:    SegmentType.EngLatText,
            english: block.text,
            latin:   segments.at(-1).english}]
          
        : segments.slice(-1).concat({
          block,
          latin:   null,
          english: block.text,
          type:    (block.width < 620 && block.height < 42
            ? SegmentType.SubHeading
            : (block.width < 620 && block.height < 90 
              ? SegmentType.Heading
              : SegmentType.EngText)) }))], []); };

const parse_page_txt = (path) => {
  const txt    = fs.readFileSync(path, 'utf8');
  const blocks = txt.split(/\n\n/).slice(2);
  const page   = [];
  let left_col = null;

  for (let i in blocks) {
    let paragraph = blocks[i].split("\n");
    const width   = get_paragraph_width(paragraph);
    paragraph     = dehyphenate(paragraph);
    
    if (width <= 35) {
      if (left_col) {
        page.push({
          type:  TextBlockType.LatinEnglish,
          latin: left_col,
          eng:   paragraph });
        
        left_col = null; }
      
      else
        left_col = paragraph; }

    else {
      if (left_col) {
        page.push({
          type:  TextBlockType.English,
          eng:   left_col });
        
        left_col = null; }
      
      page.push({
        type:  TextBlockType.English,
        eng:   paragraph }); }}
  
  return page; };

const get_paragraph_width = (paragraph: string[]): number => {
  return Math.max.apply(
    Math,
    paragraph.map(line => line.length)); };

const dehyphenate = (paragraph: string[]): string => {
  return paragraph
    .map(line => line.trim().replace(/-$/, ''))
    .join(' '); };

const range = (start, end) => {
  const r = [];
  
  for (let i = start; i < end; i++) {
    r.push(i); }
  
  return r; };

const parse_toc = (toc) => {
  return toc
    .map(item => {
      return {
        ...item,
        pages: range(item.page + 17, item.last_page + 17)
          .map(page_number => parse_page(
            "../vol" + item.volume + "/lit_"
              + item.volume.toString().padStart(2, "0") + "_=-"
              + page_number.toString().padStart(3, "0")
              + ".png.json")) }})
    
    .map(section => ({
      ...section,
      pages: section.pages.reduce(
        (page1, page2) => connect_pages(page1, page2), [])})); }

console.log(parse_toc(toc)[0].pages);
