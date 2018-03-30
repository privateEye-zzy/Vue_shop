class FileVedioLoader {
	constructor(file, cbs={}){
		this.reader = new FileReader()
		this.cbs = cbs
		this.file = file
		this.loaded = 0
		this.total = file.size
		this.step = 1024 * 1024 * 10 //每次读取10M
		this.bindEvent()
		this.readBlob(0)
	}
	bindEvent(){
		this.reader.addEventListener('progress', e => this.progress(e))
		this.reader.addEventListener('load', e => this.load(e))
	}
	progress(e) {
		this.loaded += e.loaded
		let percent = (this.loaded / this.total) * 100
		console.log('当前上传进度：'+percent.toFixed(2)+'%')
	}
	async load(e){
		await this.cbs.upload(this.reader.result)
		if(this.loaded < this.total){
			this.readBlob(this.loaded)
		}else {
			this.loaded = this.total
			console.log('上传完毕...')
		}
	}
	readBlob(start){
		let fs = this.file.slice(start, start + this.step)
		// let buf = new Blob([fs], {type: 'audio/mpeg'})
		this.reader.readAsBinaryString(fs)
	}
}
export default FileVedioLoader