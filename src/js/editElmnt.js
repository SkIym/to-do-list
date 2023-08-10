export default class editElmnt {
  static appendChildren = (parent, children = []) => {
    children.forEach((child) => {
      parent.appendChild(child);
    });
  };

  static addId = (element, id) => {
    element.id = id;
  };

  static addClass = (element, classes = []) => {
    classes.forEach((c) => {
      element.classList.add(c);
    });
  };

  static addText = (element, text) => {
    element.textContent = text;
  };

  static toggleToFlex(element) {
    element.style.display = element.style.display === "none" ? "flex" : "none";
  }

  static toggleToBlock(element) {
    element.style.display = element.style.display === "none" ? "block" : "none";
  }

  static colorAccdgToPrio(prio, element) {
    if (prio === 1) {
      element.classList.add("low-prio");
    } else if (prio === 2) {
      element.classList.add("mid-prio");
    } else {
      element.classList.add("high-prio");
    }
  }
}
