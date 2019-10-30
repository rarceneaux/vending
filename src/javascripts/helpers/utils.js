const printToDom = (divId, printThis) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = printThis;
};

export default { printToDom };
