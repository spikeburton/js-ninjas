var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  /**
   * {
   *   1: 'spike',
   *   2: 'duncan',
   *   3: 'cody'
   * }
   */
  var theHead = 0;
  var theTail = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[theTail] = value;
    theTail++;
  };

  someInstance.dequeue = function() {
    if (theTail - theHead === 0) return;

    var shifted = storage[theHead];
    delete storage[theHead];
    theHead++;
    return shifted;
  };

  someInstance.size = function() {
    return theTail - theHead;
  };

  return someInstance;
};
