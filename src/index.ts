import crypto from 'crypto';

interface BlcokShape {
  hash: string;
  prevHash: string;
  height: number;
  data: string;
}
class Block implements BlcokShape {
  public hash: string;
  constructor(
    public prevHash: string,
    public height: number,
    public data: string
  ) {
    this.hash = Block.calcHash(prevHash, height, data)
  }
  static calcHash(prevHash: string, height: number, data: string) {
    const toHash = `${prevHash}${height}${data}`;
    return crypto.createHash("sha256").update(toHash).digest("hex")
  }
}