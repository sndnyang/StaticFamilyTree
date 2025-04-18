const raw_inputs = `
曾祖父， 爷爷， 父子，
曾祖父， 二爷爷， 父子，
曾祖父， 三爷爷， 父子，
爷爷, 伯伯, 父子,
爷爷, 爸爸, 父子,
爷爷, 叔叔, 父子,
爷爷, 姑姑, 父女,
爸爸, 姐, 父女，
爸爸， 我, 父子,
伯伯， 堂哥， 父子
叔叔， 堂姐， 父女
堂哥， 侄女， 父女
侄女， 侄孙女， 母女
侄孙女， 人名1， 母子
人名1， 人名2， 父子
人名2， 人名3， 父子
`;

const raw_info = `
爷爷，生辰八字
爸爸，生辰八字
`;

const rawTriples = raw_inputs
  .trim()                 // 去除首尾空白
  .split('\n')           // 按行分割
  .map(line =>           // 每行处理成三元组
    line
      .split(/[，,]\s*/)         // 按逗号分割
      .map(item => item.trim())  // 去除每个字段的空格
      .filter(item => item)      // 过滤空字符串（如行末逗号导致的空项）
      .slice(0, 3)        // 确保只取前三个元素
  );


const info = raw_info
  .trim()                 // 去除首尾空白
  .split('\n')           // 按行分割
  .map(line =>           // 每行处理成三元组
    line
      .split(/[，,]\s*/)         // 按逗号分割
      .map(item => item.trim())  // 去除每个字段的空格
      .filter(item => item)      // 过滤空字符串（如行末逗号导致的空项）
      .slice(0, 3)        // 确保只取前三个元素
  );