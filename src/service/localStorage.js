export default class LocalStorage {
  static get(key, initialValue = []) {
    try {
      const savedData = localStorage.getItem(key);
      const parseData = JSON.parse(savedData);

      return parseData ?? initialValue;
    } catch (error) {
      return initialValue;
    }
  }

  static set(key, value) {
    const valueStringify = JSON.stringify(value);
    localStorage.setItem(key, valueStringify);
  }
}