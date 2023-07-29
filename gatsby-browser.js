import "./src/styles/globals.css"

export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `This application has been updated. ` +
      `Reload to display the latest version?`
  )

  if (answer === true)  window.location.reload()
}

// export const onRouteUpdate = () => {
//   navigator.serviceWorker.register('/sw.js').then((reg) => {
//     reg.update();
//   });
// };