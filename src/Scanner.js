export default class Scanner {
  constructor(templateStr) {
    this.pointer = 0;
    this.templateStr = templateStr;
    this.tail = templateStr;
  }

  scanSkipTag(tag) {
    if (this.tail.indexOf(tag) === 0) {
      this.pointer += tag.length
      this.tail = this.templateStr.substring(this.pointer)
    }
  }

  scanCharacterString(stopTag) {
    // 当tail的第一个character不是stopTag时继续扫描
    const startPointer = this.pointer
    while (this.scanningStatus() && this.tail.indexOf(stopTag) !== 0) {
      this.pointer++
      this.tail = this.templateStr.substring(this.pointer)
    }
    return this.templateStr.substring(startPointer, this.pointer)
  }
  /**
   * scanningStatus: scan the status of template string
   *
   * @return {boolean} true - 扫描进行中， false - 扫描结束
   */
  scanningStatus() {
    return this.pointer < this.templateStr.length
  }
}
