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

  static async multiModal() {
    await Swal.mixin({
      title: 'Create a New Vault',
      input: 'text',
      confirmButtonText: 'Next &rarr;',
      progressSteps: [1, 2, 3, 4]
    }).queue([
      {
        title: 'What shall we name your Vault?',
        icon: 'question',
        text: 'Name...'
      },
      {
        title: 'Give your Vault a brief description',
        icon: 'info',
        input: 'textarea',
        inputLabel: 'Description',
        inputPlaceholder: 'Description...',
        inputAttributes: {
          'aria-label': 'Vault Description'
        }
      },
      {
        title: 'Should this Vault be public or private?',
        icon: 'question',
        input: 'select',
        showDenyButton: true,
        confirmButtonText: 'Public',
        denyButtonText: 'Private'
      },
      {
        title: 'Add an image to your Vault',
        icon: 'info',
        text: "We'll provide a placeholder by default..."
      }
    ]).then((result) => {
      if (result.value) {
        AppState.newVault.name = result.value[0]
        AppState.newVault.description = result.value[1]
        if (result.isConfirmed) {
          AppState.newVault.isPrivate = false
        } else if (result.isDenied) {
          AppState.newVault.isPrivate = true
        }
        if (result.value[3] !== '') {
          AppState.newVault.img = result.value[3]
        }
      }
    })
  }
}
