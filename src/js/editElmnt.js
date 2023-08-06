export default class editElmnt {
  static appendChildren = (parent, children = []) => {

    children.forEach((child) => {
      parent.appendChild(child)
    })

  }

  static addId = (element, id) => {
    element.id = id;
  }

  static addClass = (element, classes = []) => {

    classes.forEach((c) => {
      element.classList.add(c)
    })
  }

  static addText = (element, text) => {

    element.textContent = text;

  }

  static addEvent = (element, evt, fnc) => {

    element.addEventListener(evt, fnc)

  }
}
  