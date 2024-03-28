const MinHeap = require('./modules/MinHeap');
const MaxHeap = require('./modules/MaxHeap');
const MedianHeap = require('./modules/MedianHeap');

const Test = {
  minHeap() {
    let mh = new MinHeap();
    mh.add(1);
    mh.add(10);
    mh.add(5);
    mh.add(100);
    mh.add(8);
    return mh;     
  },

  maxHeap() {
    let mh = new MaxHeap();
    mh.add(1);
    mh.add(10);
    mh.add(5);
    mh.add(100);
    mh.add(8);
    return mh;
  },

  minHeapPool() {
    let mh = this.minHeap();
    while(mh.items.length > 0) {
      console.log(mh);
      console.log(mh.poll());
    }
  },

  maxHeapPool() {
    let mh = this.maxHeap();
    while(mh.items.length > 0) {
      console.log(mh);
      console.log(mh.poll());
    }
  },

  medianHeap() { // KEEP TRACK OF MEDIAN IN STREAM OF NUMBERS
    let medianHeap = new MedianHeap();
    let items = [12, 2, 23, 13];
    while(items.length > 0) {
      let item = items.shift();
      console.log(`insert: ${item}`);
      console.log(`median: ${medianHeap.median()}`);
      medianHeap.push(item);
      console.log(medianHeap.minHeap.items); 
      console.log(medianHeap.maxHeap.items);
      console.log("\n");
    }
  },

  getKthSmallestElement(array, k) { // FIND THE K TH SMALLEST VALUE IN AN ARRAY
    let minHeap = new MinHeap();
    for (const item of array) {
      minHeap.add(item);
    }
    for(let i = 1; i < k; i++) {
      minHeap.poll();
    }
    console.log(minHeap.poll());
  },

  getKthBiggestElement(array, k) { // FIND THE KTH LARGEST VALUE IN AN ARRAY
    let maxHeap = new MaxHeap();
    for(let item of array) {
      maxHeap.add(item);
    }
    for(let i = 1; i < k; i++) {
      maxHeap.poll();
    }
    console.log(maxHeap.poll());
  }
}

Test.getKthSmallestElement([12, 3, 13, 4, 2, 40, 23], 1);
Test.getKthSmallestElement([12, 3, 13, 4, 2, 40, 23], 2);
Test.getKthSmallestElement([12, 3, 13, 4, 2, 40, 23], 3);

Test.getKthBiggestElement([12, 3, 13, 4, 2, 40, 23], 1);
Test.getKthBiggestElement([12, 3, 13, 4, 2, 40, 23], 2);
Test.getKthBiggestElement([12, 3, 13, 4, 2, 40, 23], 3);
