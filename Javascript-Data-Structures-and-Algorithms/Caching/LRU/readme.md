<h1>Least Recently Used Caching</h1>
Least recently used (LRU) caching is a caching algorithm that removes the oldest (least recently used) items first, so the item replaced is the oldest accessed item. When an item
in the cache is accessed, that item moves to the back (newest in the order) of the list.
When a page not found in the cache is accessed, the front item (or oldest in the order) is removed, and the new item is put at the back (newest in the order) of the list.