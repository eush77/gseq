[![npm](https://nodei.co/npm/gseq.png)](https://nodei.co/npm/gseq/)

# gseq

[![Build Status][travis-badge]][travis] [![Dependency Status][david-badge]][david]

Print geometric sequence of numbers, from one number to the other.

[travis]: https://travis-ci.org/eush77/gseq
[travis-badge]: https://travis-ci.org/eush77/gseq.svg
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

### `> gseq [OPTION]... FIRST RATIO LAST`

Prints `FIRST`, `FIRST*RATIO`, `FIRST*RATIO*RATIO`, … up to a number that exceeds `LAST`.

The sequence is descending if `RATIO<1`. All parameters must be positive.

Options:

- `-f, --format=FORMAT`: use printf-style FORMAT for each number.
- `-s, --separator=STRING`: use STRING to separate numbers (default: `\n`).

## Install

```
npm install -g gseq
```

## License

MIT
