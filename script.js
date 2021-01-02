let old_p_id, old_td_id;
let player1_color = "black";
let player2_color = "blue";
let active_seed = "solid 2px";
let play_padding = "10px";
let default_style = "none";

const touchPosition = (e) => {
  let td_id = e.target.id;
  let ele = document.getElementById(td_id);
  let p_ele_id;
  if (e.target.localName !== "td") {
    td_id = e.target.parentElement.id;
    p_ele_id = e.target.id;

    if (!ele.classList.contains("is-playing")) {
      ele.classList.add("is-playing");
      removeClassFromSeed(old_p_id);
      activeSeed(td_id, p_ele_id);
    }
  } else {
    if (!isEmpty(td_id)) {
      console.log(td_id, "Not empty");
      p_ele_id = e.target.childNodes[1].id;

      if (!e.target.childNodes[1].classList.contains("is-playing")) {
        e.target.childNodes[1].classList.add("is-playing");
        removeClassFromSeed(old_p_id);
        activeSeed(td_id, p_ele_id);
      }
    }
  }

  if (isEmpty(td_id)) {
    console.log(td_id, "Is empty");
    let playing_ele = document.querySelector(".is-playing");
    let newid = document.getElementById(td_id);
    document.getElementById(old_td_id).innerHTML = "";
    newid.insertAdjacentElement("beforeend", playing_ele);
  }
};

const activeSeed = (td_id, p_id) => {
  let ele = document.querySelector(".is-playing");
  ele.setAttribute("style", `border:${active_seed}`);
  old_td_id = td_id;
  old_p_id = p_id;
};

const removeClassFromSeed = (id) => {
  if (id) {
    let ele = document.getElementById(id);
    ele.setAttribute("style", `border:${default_style}`);
    ele.classList.remove("is-playing");
  }
};

const isEmpty = (id) => {
  if (document.getElementById(id).innerHTML === "") {
    return true;
  }
  return false;
};
