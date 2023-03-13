function App(): JSX.Element {
  const onAndroidClick = () => {
    window.api.openEditor({
      editor: 'android',
      fileName: 'demo-1.0.1.zip'
    })
  }
  const onIOSClick = () => {
    window.api.openEditor({
      editor: 'iOS',
      fileName: 'demo-1.0.1.zip'
    })
  }
  const download = () => {
    const url = 'http://searchbox.bj.bcebos.com/miniapp/demo-1.0.1.zip'
    window.api.download(url)
  }
  const onSetCookie = () => {
    document.cookie = 'test=123;'
  }
  const onGetCookie = () => {
    alert(document.cookie)
  }
  const onSetLocalStorage = () => {
    localStorage.setItem('local', '123')
  }
  const onGetLocalStorage = () => {
    alert(localStorage.getItem('local'))
  }
  return (
    <div className="container">
      <button onClick={download}>下载</button>
      <button onClick={onAndroidClick}>安卓打开</button>
      <button onClick={onIOSClick}>iOS打开</button>
      <button onClick={onSetCookie}>set-cookie</button>
      <button onClick={onGetCookie}>get-cookie</button>
      <button onClick={onSetLocalStorage}>onSetLocalStorage</button>
      <button onClick={onGetLocalStorage}>onGetLocalStorage</button>
    </div>
  )
}

export default App
