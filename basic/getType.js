export default function (data) {
  return Object.prototype.toString.call(data).slice(8, -1)
}
