/* eslint-disable vue/one-component-per-file */
import Swal from 'sweetalert2'
import { AppState } from '../AppState'

export default class Notification {
  /**
 *
 * @param {string} title The title text.
 * @param {string} text The body text.
 * @param {string} icon 'success', 'error', 'info', 'warning', or 'question'.
 * @param {string} confirmButtonText The text of your confirm button.
 * -----------------------------------
 * {@link https://sweetalert2.github.io/#configuration|Check out Sweet Alerts}
 */
  static async confirmAction(title = 'Are you sure?', text = "You won't be able to revert this!", icon = 'warning', confirmButtonText = 'Yes, delete it!') {
    try {
      const res = await Swal.fire({
        title: title,
        text: text,
        icon: icon,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: confirmButtonText
      })
      if (res.isConfirmed) {
        return true
      }
      return false
    } catch (error) {
      return false
    }
  }

  /**
 *
 * @param {string} title The title text
 * @param {string} display 'success', 'error', 'info', 'warning', or 'question'.
 * @param {string} position 'top', 'top-start', 'top-end', 'center', 'center-start', 'center-end', 'bottom', 'bottom-start', or 'bottom-end'.
 * @param {number} timer Time in milliseconds.
 * @param {boolean} progressBar Show progress bar or not respectively.
 * -----------------------------------
 * {@link https://sweetalert2.github.io/#configuration|Check out Sweet Alerts}
 */
  static toast(title = 'Warning!', display = 'warning', position = 'top-end', timer = 3000, progressBar = true) {
    Swal.fire({
      title: title,
      icon: display,
      position: position,
      timer: timer,
      timerProgressBar: progressBar,
      toast: true,
      showConfirmButton: false
    })
  }

  static async multiModal(str) {
    await Swal.mixin({
      title: `Create a New ${str}`,
      input: 'text',
      confirmButtonText: 'Next &rarr;',
      progressSteps: [1, 2, 3]
    }).queue([
      {
        title: `What shall we name your ${str}?`,
        icon: 'question',
        input: 'text',
        inputValue: `Your ${str}'s Name...`
      },
      {
        title: `Give your ${str} a brief description`,
        icon: 'info',
        input: 'textarea',
        inputLabel: 'Description',
        inputPlaceholder: 'Description...',
        inputValue: `Your ${str}'s Description...`,
        inputAttributes: {
          'aria-label': `${str} Description`
        }
      },
      {
        title: `Add an image to your ${str}`,
        icon: 'info',
        input: 'text',
        inputPlaceholder: 'Img Url...',
        text: "We'll provide a placeholder by default..."
      }
    ]).then((result) => {
      if (result.value && str === 'Vault') {
        const item = AppState.newVault
        item.name = result.value[0]
        item.description = result.value[1]
        if (result.value[2] === '') {
          item.img = 'http://www.fillmurray.com/g/300/300'
        } else {
          item.img = result.value[2]
        }
      }
      if (result.value && str === 'Keep') {
        const item = AppState.newKeep
        item.name = result.value[0]
        item.description = result.value[1]
        if (result.value[2] === '') {
          item.img = 'http://www.fillmurray.com/300/300'
        } else {
          item.img = result.value[2]
        }
      }
    })
  }

  static async isPrivate(vault) {
    await Swal.fire({
      title: 'Do you want your Vault to be Public or Private?',
      icon: 'question',
      showDenyButton: true,
      confirmButtonText: 'Public',
      denyButtonText: 'Private'
    }).then((result) => {
      if (result.isConfirmed) {
        vault.isPrivate = false
      }
      if (result.isDenied) {
        vault.isPrivate = true
      }
    })
  }

  static async editAccount() {
    await Swal.mixin({
      title: 'Edit your Profile Info',
      input: 'text',
      confirmButtonText: 'Next &rarr;',
      progressSteps: [1, 2]
    }).queue([
      {
        title: 'Update your Profile Name',
        icon: 'info',
        inputPlaceholder: 'Name...'
      },
      {
        title: 'Update your Profile Image',
        icon: 'info',
        input: 'text',
        inputPlaceholder: 'Img Url...'
      }
    ]).then((result) => {
      if (result.value) {
        AppState.account.name = result.value[0]
        AppState.account.picture = result.value[1]
      }
    })
  }
}
