function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('.target')
}

function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list')

  for (let i = 0, l = rankedLists.length; i < l; i++) {
    let children = rankedLists[i].children

    for (let j = 0, k = children.length; j < k; j++) {
      children[j].innerHTML = parseInt(children[j].innerHTML) + n
    }
  }
}


function deepestChild() {
  let element = document.getElementById('grand-node');
  let nextNode = element.children[0]

  while (nextNode) {
    element = nextNode
    nextNode = element.children[0]
  }

  return element
}


