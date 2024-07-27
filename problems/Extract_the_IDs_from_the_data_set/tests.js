'use strict'
const extractIds = require('./main.js')
const Tests = {
  test1() {

    var data = {
      id: 1,
      items: [
        {id: 2},
        {id: 3, items: [
          {id: 4},
          {id: 5}
        ]}
      ]
    }

    console.log(extractIds(data))

  }
}

Tests.test1()
