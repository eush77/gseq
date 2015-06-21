[![npm](https://nodei.co/npm/gseq.png)](https://nodei.co/npm/gseq/)

# gseq

[![Dependency Status][david-badge]][david]

Print geometric sequence of numbers, from one number to the other.

[david]: https://david-dm.org/eush77/gseq
[david-badge]: https://david-dm.org/eush77/gseq.png

## Example

```
> gseq 1 2 50
1
2
4
8
16
32
```

## CLI

### `> gseq FIRST RATIO LAST`

Prints `FIRST`, `FIRST*RATIO`, `FIRST*RATIO*RATIO`, … up to a number that exceeds `LAST`.

The sequence is descending if `RATIO<1`. All parameters must be positive.

## Install

```
npm install -g gseq
```

## License

MIT
