export const getNodeRectFromComponent = async selector => {
  return await new Promise((resolve) => {
    my.createSelectorQuery()
      .selectAll(selector).boundingClientRect()
      .exec((ret) => {
         resolve(ret[0]);
    })
  });
}

export const timeout = (delay = 100) => {
  return new Promise(resolve => {
    setTimeout(resolve, delay)
  })
};


         my.createSelectorQuery()
      .selectAll('.l-sticky-item').boundingClientRect()
      .exec((ret) => {
      console.log(ret[0][index], 'ret');
    })