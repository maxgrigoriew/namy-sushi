/* eslint-disable */
import Vue from 'vue'

Vue.directive('mask', {
  inserted: function (element, binding) {
    let mask = binding.value,
      first = mask.indexOf('_'),
      fieldsL = mask.replace(/[^_]/gm, '').length,
      clean = mask.replace(/[^0-9_]/gm, ''),
      indexes = []
    const el = element.querySelector('input')
    console.log(123, el)
    for (let i = 0; i < clean.length; i++) {
      if (!isNaN(clean[i])) {
        indexes.push(i)
      }
    }

    el.value = mask
    el.clean = mask.replace(/[^0-9]/gm, '')

    function maskIt(event, start) {
      let value = el.value,
        filtred = value.replace(/[^0-9]/gm, ''),
        result = ''

      if (value.length < first) {
        value = mask + value
        filtred = value.replace(/[^0-9]/gm, '')
      }

      for (let i = 0; i < filtred.length; i++) {
        if (indexes.indexOf(i) == -1) {
          result += filtred[i]
        }
      }

      value = ''
      let cursor = 0

      for (let i = 0; i < mask.length; i++) {
        if (mask[i] == '_' && result) {
          value += result[0]
          result = result.slice(1)
          cursor = i + 1
        } else {
          value += mask[i]
        }
      }

      if (cursor < first) {
        cursor = first
      }

      el.value = value

      el.clean = el.value.replace(/[^0-9]/gm, '')

      el.setSelectionRange(cursor, cursor)
    }

    el.addEventListener('focus', function (event) {
      event.preventDefault()
    })

    el.addEventListener('click', function (event) {
      event.preventDefault()
      let start = el.value.indexOf('_')

      if (start == -1) {
        start = el.value.length
      }

      el.setSelectionRange(start, start)
    })

    el.addEventListener('paste', function (event) {
      let start = el.selectionStart

      if (start < first) {
        el.value = '_' + el.value
      }
    })

    el.addEventListener('input', function (event) {
      let start = el.selectionStart
      maskIt(event, start)
    })
  },
})

new Vue({
  el: '#app',
  methods: {
    unmaskedValue: function () {
      let val = this.$refs.input.clean
      console.log(val)
    },
  },
})
