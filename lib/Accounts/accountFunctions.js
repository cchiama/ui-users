export function getTotal(amount, taxvat) {
  if (!amount) return parseFloat(0).toFixed(2);
  // eslint-disable-next-line no-restricted-globals
  if (isNaN(amount)) return parseFloat(0).toFixed(2);
  // eslint-disable-next-line no-restricted-globals
  else if (isNaN(taxvat)) return parseFloat(amount).toFixed(2);
  else return parseFloat(parseFloat(amount) + ((amount * taxvat) / 100)).toFixed(2);
}

export function count(array) {
  const list = [];
  const countList = [];
  const result = [];
  array.forEach((a) => {
    const index = list.indexOf(a);
    if (index === -1) {
      list.push(a);
      countList.push(1);
    } else {
      countList[index]++;
    }
  });
  for (let i = 0; i < list.length; i++) {
    if (list[i] !== undefined) {
      result.push({ name: list[i], size: countList[i] });
    }
  }
  return result;
}

export function handleFilterChange(e, param) {
  const state = this.filterState(this.queryParam(param));
  state[e.target.name] = e.target.checked;
  this.transitionToParams({ [param]: Object.keys(state).filter(key => state[key]).join(',') });
  return state;
}

export function handleFilterClear(name) {
  const state = this.filterState(this.queryParam('f'));

  Object.keys(state).forEach((key) => {
    if (key.startsWith(`${name}.`)) {
      state[key] = false;
    }
  });

  this.transitionToParams({ f: Object.keys(state).filter(key => state[key]).join(',') });
  return state;
}
