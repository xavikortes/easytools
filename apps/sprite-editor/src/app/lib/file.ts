export const downloadFile = (filename: string, blob: Blob) => {
    var url = (URL || webkitURL).createObjectURL(blob)
    const a = document.createElement('a')
    a.style.display = 'none'
    a.href = url
    a.download = filename
    document.body.appendChild(a)
    a.click()
}
