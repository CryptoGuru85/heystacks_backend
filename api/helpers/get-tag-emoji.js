module.exports = {


  friendlyName: 'Get emoji for tag string, return both',

  inputs: {
    tag: {
      type: 'string',
      required: true
    },
  },


  fn: async function(inputs) {
    
    if (inputs.tag === 'resources') return 'đ ' + inputs.tag
    else if (inputs.tag === 'tips') return 'đ ' + inputs.tag
    else if (inputs.tag === 'recommendations') return 'đ ' + inputs.tag
    else if (inputs.tag === 'politics') return 'đŗī¸ ' + inputs.tag
    else if (inputs.tag === 'art') return 'đ¨ ' + inputs.tag
    else if (inputs.tag === 'data') return 'đī¸ ' + inputs.tag
    else if (inputs.tag === 'remotework') return 'đģ ' + inputs.tag
    else if (inputs.tag === 'food') return 'đ˛ ' + inputs.tag
    else if (inputs.tag === 'films') return 'đŊī¸ ' + inputs.tag
    else if (inputs.tag === 'movies') return 'đŊī¸ ' + inputs.tag
    else if (inputs.tag === 'coronavirus') return 'đˇ ' + inputs.tag
    else if (inputs.tag === 'games') return 'đŽī¸ ' + inputs.tag
    else if (inputs.tag === 'freelance') return 'đĨī¸ī¸ ' + inputs.tag
    else if (inputs.tag === 'teaching') return 'đŠâđĢ ' + inputs.tag
    else if (inputs.tag === 'healthcare') return 'âī¸ ' + inputs.tag
    else if (inputs.tag === 'jobs') return 'đī¸ ' + inputs.tag
    else if (inputs.tag === 'parenting') return 'đĒī¸ ' + inputs.tag
    else if (inputs.tag === 'music') return 'đĩ ' + inputs.tag
    else if (inputs.tag === 'sport') return 'âŊī¸ ' + inputs.tag
    else if (inputs.tag === 'journalism') return 'đ°ī¸ ' + inputs.tag
    else if (inputs.tag === 'guide') return 'âšī¸ī¸ ' + inputs.tag
    else if (inputs.tag === 'animal crossing') return 'đģī¸ ' + inputs.tag
    else if (inputs.tag === 'ACNH') return 'đģ ' + inputs.tag
    else if (inputs.tag === 'finance') return 'đ¸ī¸ ' + inputs.tag
    else if (inputs.tag === 'startup') return 'đĻī¸ ' + inputs.tag
    else if (inputs.tag === 'fitness') return 'đĒī¸ ' + inputs.tag
    else if (inputs.tag === 'films') return 'đŊī¸ ' + inputs.tag
    else if (inputs.tag === 'VC') return 'đĻī¸ī¸ ' + inputs.tag
    else if (inputs.tag === 'climate') return 'đī¸ ' + inputs.tag
    else if (inputs.tag === 'recipe') return 'đ˛ ' + inputs.tag
    else if (inputs.tag === 'recruitment') return 'đī¸ ' + inputs.tag
    else if (inputs.tag === 'vegan') return 'đąī¸ ' + inputs.tag
    else if (inputs.tag === 'aviation') return 'âī¸ ' + inputs.tag
    else if (inputs.tag === 'theatre') return 'đ­ ' + inputs.tag
    else if (inputs.tag === 'history') return 'đē ' + inputs.tag
    else if (inputs.tag === 'reading') return 'đ ' + inputs.tag
    else if (inputs.tag === 'technology') return 'âī¸ ' + inputs.tag
    else if (inputs.tag === 'socialism') return 'đšī¸ ' + inputs.tag
    else if (inputs.tag === 'fact-check') return 'đ ' + inputs.tag
    else if (inputs.tag === 'protest') return 'âī¸ ' + inputs.tag
    else if (inputs.tag === 'travel') return 'đ§ŗī¸ ' + inputs.tag
    else if (inputs.tag === 'books') return 'đī¸ ' + inputs.tag
    else if (inputs.tag === 'mental health') return 'đī¸ ' + inputs.tag
    else if (inputs.tag === 'podcasts') return 'đī¸ī¸ ' + inputs.tag
    else if (inputs.tag === 'contacts') return 'đ ' + inputs.tag
    else if (inputs.tag === 'media') return 'đ ' + inputs.tag
    else if (inputs.tag === 'society') return 'đī¸ ' + inputs.tag
    else if (inputs.tag === 'research') return 'đŦ ' + inputs.tag
    else if (inputs.tag === 'LGBT') return 'đŗī¸âđ ' + inputs.tag
    else if (inputs.tag === 'programming') return 'â¨ī¸ī¸ī¸' + inputs.tag
    else if (inputs.tag === 'learning') return 'đŠâđĢ' + inputs.tag
    else if (inputs.tag === 'AI') return 'đ§ ī¸ī¸' + inputs.tag
    else if (inputs.tag === 'gender') return 'âī¸ī¸ī¸' + inputs.tag
    else return inputs.tag
    
  }

};
