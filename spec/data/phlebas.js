'use strict'

const input = `
            IV. Death by Water

    Phlebas the Phoenician, a fortnight dead,
    Forgot the cry of gulls, and the deep sea swell
    And the profit and loss.
                          A current under sea
    Picked his bones in whispers. As he rose and fell
    He passed the stages of his age and youth
    Entering the whirlpool.
                          Gentile or Jew
    O you who turn the wheel and look to windward,
    Consider Phlebas, who was once handsome and tall as you.
`

const expected = `        IV. Death by Water

Phlebas the Phoenician, a fortnight dead,
Forgot the cry of gulls, and the deep sea swell
And the profit and loss.
                      A current under sea
Picked his bones in whispers. As he rose and fell
He passed the stages of his age and youth
Entering the whirlpool.
                      Gentile or Jew
O you who turn the wheel and look to windward,
Consider Phlebas, who was once handsome and tall as you.
`

const preserved = `          IV. Death by Water

  Phlebas the Phoenician, a fortnight dead,
  Forgot the cry of gulls, and the deep sea swell
  And the profit and loss.
                        A current under sea
  Picked his bones in whispers. As he rose and fell
  He passed the stages of his age and youth
  Entering the whirlpool.
                        Gentile or Jew
  O you who turn the wheel and look to windward,
  Consider Phlebas, who was once handsome and tall as you.
`

module.exports = { input, expected, preserved }