import { EventEmitter, Directive, ElementRef, Input, HostListener, Output, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} node
 * @return {?}
 */
function isElement(node) {
    return !!(node && (node.nodeName || node.prop && node.attr && node.find));
}
class FileLikeObject {
    /**
     * @param {?} fileOrInput
     */
    constructor(fileOrInput) {
        this.rawFile = fileOrInput;
        let /** @type {?} */ isInput = isElement(fileOrInput);
        let /** @type {?} */ fakePathOrObject = isInput ? fileOrInput.value : fileOrInput;
        let /** @type {?} */ postfix = typeof fakePathOrObject === 'string' ? 'FakePath' : 'Object';
        let /** @type {?} */ method = '_createFrom' + postfix;
        (/** @type {?} */ (this))[method](fakePathOrObject);
    }
    /**
     * @param {?} path
     * @return {?}
     */
    _createFromFakePath(path) {
        this.lastModifiedDate = void 0;
        this.size = void 0;
        this.type = 'like/' + path.slice(path.lastIndexOf('.') + 1).toLowerCase();
        this.name = path.slice(path.lastIndexOf('/') + path.lastIndexOf('\\') + 2);
    }
    /**
     * @param {?} object
     * @return {?}
     */
    _createFromObject(object) {
        this.size = object.size;
        this.type = object.type;
        this.name = object.name;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class FileItem {
    /**
     * @param {?} uploader
     * @param {?} some
     * @param {?} options
     */
    constructor(uploader, some, options) {
        this.url = '/';
        this.headers = [];
        this.withCredentials = true;
        this.formData = [];
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = false;
        this.isSuccess = false;
        this.isCancel = false;
        this.isError = false;
        this.progress = 0;
        this.index = void 0;
        this.uploader = uploader;
        this.some = some;
        this.options = options;
        this.file = new FileLikeObject(some);
        this._file = some;
        if (uploader.options) {
            this.method = uploader.options.method || 'POST';
            this.alias = uploader.options.itemAlias || 'file';
        }
        this.url = uploader.options.url;
    }
    /**
     * @return {?}
     */
    upload() {
        try {
            this.uploader.uploadItem(this);
        }
        catch (/** @type {?} */ e) {
            this.uploader._onCompleteItem(this, '', 0, {});
            this.uploader._onErrorItem(this, '', 0, {});
        }
    }
    /**
     * @return {?}
     */
    cancel() {
        this.uploader.cancelItem(this);
    }
    /**
     * @return {?}
     */
    remove() {
        this.uploader.removeFromQueue(this);
    }
    /**
     * @return {?}
     */
    onBeforeUpload() {
        return void 0;
    }
    /**
     * @param {?} form
     * @return {?}
     */
    onBuildForm(form) {
        return { form };
    }
    /**
     * @param {?} progress
     * @return {?}
     */
    onProgress(progress) {
        return { progress };
    }
    /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    onSuccess(response, status, headers) {
        return { response, status, headers };
    }
    /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    onError(response, status, headers) {
        return { response, status, headers };
    }
    /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    onCancel(response, status, headers) {
        return { response, status, headers };
    }
    /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    onComplete(response, status, headers) {
        return { response, status, headers };
    }
    /**
     * @return {?}
     */
    _onBeforeUpload() {
        this.isReady = true;
        this.isUploading = true;
        this.isUploaded = false;
        this.isSuccess = false;
        this.isCancel = false;
        this.isError = false;
        this.progress = 0;
        this.onBeforeUpload();
    }
    /**
     * @param {?} form
     * @return {?}
     */
    _onBuildForm(form) {
        this.onBuildForm(form);
    }
    /**
     * @param {?} progress
     * @return {?}
     */
    _onProgress(progress) {
        this.progress = progress;
        this.onProgress(progress);
    }
    /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    _onSuccess(response, status, headers) {
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = true;
        this.isSuccess = true;
        this.isCancel = false;
        this.isError = false;
        this.progress = 100;
        this.index = void 0;
        this.onSuccess(response, status, headers);
    }
    /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    _onError(response, status, headers) {
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = true;
        this.isSuccess = false;
        this.isCancel = false;
        this.isError = true;
        this.progress = 0;
        this.index = void 0;
        this.onError(response, status, headers);
    }
    /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    _onCancel(response, status, headers) {
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = false;
        this.isSuccess = false;
        this.isCancel = true;
        this.isError = false;
        this.progress = 0;
        this.index = void 0;
        this.onCancel(response, status, headers);
    }
    /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    _onComplete(response, status, headers) {
        this.onComplete(response, status, headers);
        if (this.uploader.options.removeAfterUpload) {
            this.remove();
        }
    }
    /**
     * @return {?}
     */
    _prepareToUploading() {
        this.index = this.index || ++this.uploader._nextIndex;
        this.isReady = true;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class FileType {
    /**
     * @param {?} file
     * @return {?}
     */
    static getMimeClass(file) {
        let /** @type {?} */ mimeClass = 'application';
        if (this.mime_psd.indexOf(file.type) !== -1) {
            mimeClass = 'image';
        }
        else if (file.type.match('image.*')) {
            mimeClass = 'image';
        }
        else if (file.type.match('video.*')) {
            mimeClass = 'video';
        }
        else if (file.type.match('audio.*')) {
            mimeClass = 'audio';
        }
        else if (file.type === 'application/pdf') {
            mimeClass = 'pdf';
        }
        else if (this.mime_compress.indexOf(file.type) !== -1) {
            mimeClass = 'compress';
        }
        else if (this.mime_doc.indexOf(file.type) !== -1) {
            mimeClass = 'doc';
        }
        else if (this.mime_xsl.indexOf(file.type) !== -1) {
            mimeClass = 'xls';
        }
        else if (this.mime_ppt.indexOf(file.type) !== -1) {
            mimeClass = 'ppt';
        }
        if (mimeClass === 'application') {
            mimeClass = this.fileTypeDetection(file.name);
        }
        return mimeClass;
    }
    /**
     * @param {?} inputFilename
     * @return {?}
     */
    static fileTypeDetection(inputFilename) {
        let /** @type {?} */ types = {
            'jpg': 'image',
            'jpeg': 'image',
            'tif': 'image',
            'psd': 'image',
            'bmp': 'image',
            'png': 'image',
            'nef': 'image',
            'tiff': 'image',
            'cr2': 'image',
            'dwg': 'image',
            'cdr': 'image',
            'ai': 'image',
            'indd': 'image',
            'pin': 'image',
            'cdp': 'image',
            'skp': 'image',
            'stp': 'image',
            '3dm': 'image',
            'mp3': 'audio',
            'wav': 'audio',
            'wma': 'audio',
            'mod': 'audio',
            'm4a': 'audio',
            'compress': 'compress',
            'zip': 'compress',
            'rar': 'compress',
            '7z': 'compress',
            'lz': 'compress',
            'z01': 'compress',
            'bz2': 'compress',
            'gz': 'compress',
            'pdf': 'pdf',
            'xls': 'xls',
            'xlsx': 'xls',
            'ods': 'xls',
            'mp4': 'video',
            'avi': 'video',
            'wmv': 'video',
            'mpg': 'video',
            'mts': 'video',
            'flv': 'video',
            '3gp': 'video',
            'vob': 'video',
            'm4v': 'video',
            'mpeg': 'video',
            'm2ts': 'video',
            'mov': 'video',
            'doc': 'doc',
            'docx': 'doc',
            'eps': 'doc',
            'txt': 'doc',
            'odt': 'doc',
            'rtf': 'doc',
            'ppt': 'ppt',
            'pptx': 'ppt',
            'pps': 'ppt',
            'ppsx': 'ppt',
            'odp': 'ppt'
        };
        let /** @type {?} */ chunks = inputFilename.split('.');
        if (chunks.length < 2) {
            return 'application';
        }
        let /** @type {?} */ extension = chunks[chunks.length - 1].toLowerCase();
        if (types[extension] === undefined) {
            return 'application';
        }
        else {
            return types[extension];
        }
    }
}
FileType.mime_doc = [
    'application/msword',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.template',
    'application/vnd.ms-word.document.macroEnabled.12',
    'application/vnd.ms-word.template.macroEnabled.12'
];
FileType.mime_xsl = [
    'application/vnd.ms-excel',
    'application/vnd.ms-excel',
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.template',
    'application/vnd.ms-excel.sheet.macroEnabled.12',
    'application/vnd.ms-excel.template.macroEnabled.12',
    'application/vnd.ms-excel.addin.macroEnabled.12',
    'application/vnd.ms-excel.sheet.binary.macroEnabled.12'
];
FileType.mime_ppt = [
    'application/vnd.ms-powerpoint',
    'application/vnd.ms-powerpoint',
    'application/vnd.ms-powerpoint',
    'application/vnd.ms-powerpoint',
    'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    'application/vnd.openxmlformats-officedocument.presentationml.template',
    'application/vnd.openxmlformats-officedocument.presentationml.slideshow',
    'application/vnd.ms-powerpoint.addin.macroEnabled.12',
    'application/vnd.ms-powerpoint.presentation.macroEnabled.12',
    'application/vnd.ms-powerpoint.presentation.macroEnabled.12',
    'application/vnd.ms-powerpoint.slideshow.macroEnabled.12'
];
FileType.mime_psd = [
    'image/photoshop',
    'image/x-photoshop',
    'image/psd',
    'application/photoshop',
    'application/psd',
    'zz-application/zz-winassoc-psd'
];
FileType.mime_compress = [
    'application/x-gtar',
    'application/x-gcompress',
    'application/compress',
    'application/x-tar',
    'application/x-rar-compressed',
    'application/octet-stream',
    'application/x-zip-compressed',
    'application/zip-compressed',
    'application/x-7z-compressed',
    'application/gzip',
    'application/x-bzip2'
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} value
 * @return {?}
 */
function isFile(value) {
    return (File && value instanceof File);
}
/**
 * @record
 */

/**
 * @record
 */

class FileUploader {
    /**
     * @param {?} options
     */
    constructor(options) {
        this.isUploading = false;
        this.queue = [];
        this.progress = 0;
        this._nextIndex = 0;
        this.options = {
            autoUpload: false,
            isHTML5: true,
            filters: [],
            removeAfterUpload: false,
            disableMultipart: false,
            formatDataFunction: (item) => item._file,
            formatDataFunctionIsAsync: false
        };
        this.setOptions(options);
        this.response = new EventEmitter();
    }
    /**
     * @param {?} options
     * @return {?}
     */
    setOptions(options) {
        this.options = Object.assign(this.options, options);
        this.authToken = this.options.authToken;
        this.authTokenHeader = this.options.authTokenHeader || 'Authorization';
        this.autoUpload = this.options.autoUpload;
        this.options.filters.unshift({ name: 'queueLimit', fn: this._queueLimitFilter });
        if (this.options.maxFileSize) {
            this.options.filters.unshift({ name: 'fileSize', fn: this._fileSizeFilter });
        }
        if (this.options.allowedFileType) {
            this.options.filters.unshift({ name: 'fileType', fn: this._fileTypeFilter });
        }
        if (this.options.allowedMimeType) {
            this.options.filters.unshift({ name: 'mimeType', fn: this._mimeTypeFilter });
        }
        for (let /** @type {?} */ i = 0; i < this.queue.length; i++) {
            this.queue[i].url = this.options.url;
        }
    }
    /**
     * @param {?} files
     * @param {?=} options
     * @param {?=} filters
     * @return {?}
     */
    addToQueue(files, options, filters) {
        let /** @type {?} */ list = [];
        for (let /** @type {?} */ file of files) {
            list.push(file);
        }
        let /** @type {?} */ arrayOfFilters = this._getFilters(filters);
        let /** @type {?} */ count = this.queue.length;
        let /** @type {?} */ addedFileItems = [];
        list.map((some) => {
            if (!options) {
                options = this.options;
            }
            let /** @type {?} */ temp = new FileLikeObject(some);
            if (this._isValidFile(temp, arrayOfFilters, options)) {
                let /** @type {?} */ fileItem = new FileItem(this, some, options);
                addedFileItems.push(fileItem);
                this.queue.push(fileItem);
                this._onAfterAddingFile(fileItem);
            }
            else {
                let /** @type {?} */ filter = arrayOfFilters[this._failFilterIndex];
                this._onWhenAddingFileFailed(temp, filter, options);
            }
        });
        if (this.queue.length !== count) {
            this._onAfterAddingAll(addedFileItems);
            this.progress = this._getTotalProgress();
        }
        this._render();
        if (this.options.autoUpload) {
            this.uploadAll();
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    removeFromQueue(value) {
        let /** @type {?} */ index = this.getIndexOfItem(value);
        let /** @type {?} */ item = this.queue[index];
        if (item.isUploading) {
            item.cancel();
        }
        this.queue.splice(index, 1);
        this.progress = this._getTotalProgress();
    }
    /**
     * @return {?}
     */
    clearQueue() {
        while (this.queue.length) {
            this.queue[0].remove();
        }
        this.progress = 0;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    uploadItem(value) {
        let /** @type {?} */ index = this.getIndexOfItem(value);
        let /** @type {?} */ item = this.queue[index];
        let /** @type {?} */ transport = this.options.isHTML5 ? '_xhrTransport' : '_iframeTransport';
        item._prepareToUploading();
        if (this.isUploading) {
            return;
        }
        this.isUploading = true;
        (/** @type {?} */ (this))[transport](item);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    cancelItem(value) {
        let /** @type {?} */ index = this.getIndexOfItem(value);
        let /** @type {?} */ item = this.queue[index];
        let /** @type {?} */ prop = this.options.isHTML5 ? item._xhr : item._form;
        if (item && item.isUploading) {
            prop.abort();
        }
    }
    /**
     * @return {?}
     */
    uploadAll() {
        let /** @type {?} */ items = this.getNotUploadedItems().filter((item) => !item.isUploading);
        if (!items.length) {
            return;
        }
        items.map((item) => item._prepareToUploading());
        items[0].upload();
    }
    /**
     * @return {?}
     */
    cancelAll() {
        let /** @type {?} */ items = this.getNotUploadedItems();
        items.map((item) => item.cancel());
    }
    /**
     * @param {?} value
     * @return {?}
     */
    isFile(value) {
        return isFile(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    isFileLikeObject(value) {
        return value instanceof FileLikeObject;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    getIndexOfItem(value) {
        return typeof value === 'number' ? value : this.queue.indexOf(value);
    }
    /**
     * @return {?}
     */
    getNotUploadedItems() {
        return this.queue.filter((item) => !item.isUploaded);
    }
    /**
     * @return {?}
     */
    getReadyItems() {
        return this.queue
            .filter((item) => (item.isReady && !item.isUploading))
            .sort((item1, item2) => item1.index - item2.index);
    }
    /**
     * @return {?}
     */
    destroy() {
        return void 0;
    }
    /**
     * @param {?} fileItems
     * @return {?}
     */
    onAfterAddingAll(fileItems) {
        return { fileItems };
    }
    /**
     * @param {?} fileItem
     * @param {?} form
     * @return {?}
     */
    onBuildItemForm(fileItem, form) {
        return { fileItem, form };
    }
    /**
     * @param {?} fileItem
     * @return {?}
     */
    onAfterAddingFile(fileItem) {
        return { fileItem };
    }
    /**
     * @param {?} item
     * @param {?} filter
     * @param {?} options
     * @return {?}
     */
    onWhenAddingFileFailed(item, filter, options) {
        return { item, filter, options };
    }
    /**
     * @param {?} fileItem
     * @return {?}
     */
    onBeforeUploadItem(fileItem) {
        return { fileItem };
    }
    /**
     * @param {?} fileItem
     * @param {?} progress
     * @return {?}
     */
    onProgressItem(fileItem, progress) {
        return { fileItem, progress };
    }
    /**
     * @param {?} progress
     * @return {?}
     */
    onProgressAll(progress) {
        return { progress };
    }
    /**
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    onSuccessItem(item, response, status, headers) {
        return { item, response, status, headers };
    }
    /**
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    onErrorItem(item, response, status, headers) {
        return { item, response, status, headers };
    }
    /**
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    onCancelItem(item, response, status, headers) {
        return { item, response, status, headers };
    }
    /**
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    onCompleteItem(item, response, status, headers) {
        return { item, response, status, headers };
    }
    /**
     * @return {?}
     */
    onCompleteAll() {
        return void 0;
    }
    /**
     * @param {?} item
     * @return {?}
     */
    _mimeTypeFilter(item) {
        return !(this.options.allowedMimeType && this.options.allowedMimeType.indexOf(item.type) === -1);
    }
    /**
     * @param {?} item
     * @return {?}
     */
    _fileSizeFilter(item) {
        return !(this.options.maxFileSize && item.size > this.options.maxFileSize);
    }
    /**
     * @param {?} item
     * @return {?}
     */
    _fileTypeFilter(item) {
        return !(this.options.allowedFileType &&
            this.options.allowedFileType.indexOf(FileType.getMimeClass(item)) === -1);
    }
    /**
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    _onErrorItem(item, response, status, headers) {
        item._onError(response, status, headers);
        this.onErrorItem(item, response, status, headers);
    }
    /**
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    _onCompleteItem(item, response, status, headers) {
        item._onComplete(response, status, headers);
        this.onCompleteItem(item, response, status, headers);
        let /** @type {?} */ nextItem = this.getReadyItems()[0];
        this.isUploading = false;
        if (nextItem) {
            nextItem.upload();
            return;
        }
        this.onCompleteAll();
        this.progress = this._getTotalProgress();
        this._render();
    }
    /**
     * @param {?} parsedHeaders
     * @return {?}
     */
    _headersGetter(parsedHeaders) {
        return (name) => {
            if (name) {
                return parsedHeaders[name.toLowerCase()] || void 0;
            }
            return parsedHeaders;
        };
    }
    /**
     * @param {?} item
     * @return {?}
     */
    _xhrTransport(item) {
        let /** @type {?} */ that = this;
        let /** @type {?} */ xhr = item._xhr = new XMLHttpRequest();
        let /** @type {?} */ sendable;
        this._onBeforeUploadItem(item);
        if (typeof item._file.size !== 'number') {
            throw new TypeError('The file specified is no longer valid');
        }
        if (!this.options.disableMultipart) {
            sendable = new FormData();
            this._onBuildItemForm(item, sendable);
            const /** @type {?} */ appendFile = () => sendable.append(item.alias, item._file, item.file.name);
            if (!this.options.parametersBeforeFiles) {
                appendFile();
            }
            // For AWS, Additional Parameters must come BEFORE Files
            if (this.options.additionalParameter !== undefined) {
                Object.keys(this.options.additionalParameter).forEach((key) => {
                    let /** @type {?} */ paramVal = this.options.additionalParameter[key];
                    // Allow an additional parameter to include the filename
                    if (typeof paramVal === 'string' && paramVal.indexOf('{{file_name}}') >= 0) {
                        paramVal = paramVal.replace('{{file_name}}', item.file.name);
                    }
                    sendable.append(key, paramVal);
                });
            }
            if (this.options.parametersBeforeFiles) {
                appendFile();
            }
        }
        else {
            sendable = this.options.formatDataFunction(item);
        }
        xhr.upload.onprogress = (event) => {
            let /** @type {?} */ progress = Math.round(event.lengthComputable ? event.loaded * 100 / event.total : 0);
            this._onProgressItem(item, progress);
        };
        xhr.onload = () => {
            let /** @type {?} */ headers = this._parseHeaders(xhr.getAllResponseHeaders());
            let /** @type {?} */ response = this._transformResponse(xhr.response, headers);
            let /** @type {?} */ gist = this._isSuccessCode(xhr.status) ? 'Success' : 'Error';
            let /** @type {?} */ method = '_on' + gist + 'Item';
            (/** @type {?} */ (this))[method](item, response, xhr.status, headers);
            this._onCompleteItem(item, response, xhr.status, headers);
        };
        xhr.onerror = () => {
            let /** @type {?} */ headers = this._parseHeaders(xhr.getAllResponseHeaders());
            let /** @type {?} */ response = this._transformResponse(xhr.response, headers);
            this._onErrorItem(item, response, xhr.status, headers);
            this._onCompleteItem(item, response, xhr.status, headers);
        };
        xhr.onabort = () => {
            let /** @type {?} */ headers = this._parseHeaders(xhr.getAllResponseHeaders());
            let /** @type {?} */ response = this._transformResponse(xhr.response, headers);
            this._onCancelItem(item, response, xhr.status, headers);
            this._onCompleteItem(item, response, xhr.status, headers);
        };
        xhr.open(item.method, item.url, true);
        xhr.withCredentials = item.withCredentials;
        if (this.options.headers) {
            for (let /** @type {?} */ header of this.options.headers) {
                xhr.setRequestHeader(header.name, header.value);
            }
        }
        if (item.headers.length) {
            for (let /** @type {?} */ header of item.headers) {
                xhr.setRequestHeader(header.name, header.value);
            }
        }
        if (this.authToken) {
            xhr.setRequestHeader(this.authTokenHeader, this.authToken);
        }
        xhr.onreadystatechange = function () {
            if (xhr.readyState == XMLHttpRequest.DONE) {
                that.response.emit(xhr.responseText);
            }
        };
        if (this.options.formatDataFunctionIsAsync) {
            sendable.then((result) => xhr.send(JSON.stringify(result)));
        }
        else {
            xhr.send(sendable);
        }
        this._render();
    }
    /**
     * @param {?=} value
     * @return {?}
     */
    _getTotalProgress(value = 0) {
        if (this.options.removeAfterUpload) {
            return value;
        }
        let /** @type {?} */ notUploaded = this.getNotUploadedItems().length;
        let /** @type {?} */ uploaded = notUploaded ? this.queue.length - notUploaded : this.queue.length;
        let /** @type {?} */ ratio = 100 / this.queue.length;
        let /** @type {?} */ current = value * ratio / 100;
        return Math.round(uploaded * ratio + current);
    }
    /**
     * @param {?} filters
     * @return {?}
     */
    _getFilters(filters) {
        if (!filters) {
            return this.options.filters;
        }
        if (Array.isArray(filters)) {
            return filters;
        }
        if (typeof filters === 'string') {
            let /** @type {?} */ names = filters.match(/[^\s,]+/g);
            return this.options.filters
                .filter((filter) => names.indexOf(filter.name) !== -1);
        }
        return this.options.filters;
    }
    /**
     * @return {?}
     */
    _render() {
        return void 0;
    }
    /**
     * @return {?}
     */
    _queueLimitFilter() {
        return this.options.queueLimit === undefined || this.queue.length < this.options.queueLimit;
    }
    /**
     * @param {?} file
     * @param {?} filters
     * @param {?} options
     * @return {?}
     */
    _isValidFile(file, filters, options) {
        this._failFilterIndex = -1;
        return !filters.length ? true : filters.every((filter) => {
            this._failFilterIndex++;
            return filter.fn.call(this, file, options);
        });
    }
    /**
     * @param {?} status
     * @return {?}
     */
    _isSuccessCode(status) {
        return (status >= 200 && status < 300) || status === 304;
    }
    /**
     * @param {?} response
     * @param {?} headers
     * @return {?}
     */
    _transformResponse(response, headers) {
        return response;
    }
    /**
     * @param {?} headers
     * @return {?}
     */
    _parseHeaders(headers) {
        let /** @type {?} */ parsed = {};
        let /** @type {?} */ key;
        let /** @type {?} */ val;
        let /** @type {?} */ i;
        if (!headers) {
            return parsed;
        }
        headers.split('\n').map((line) => {
            i = line.indexOf(':');
            key = line.slice(0, i).trim().toLowerCase();
            val = line.slice(i + 1).trim();
            if (key) {
                parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
            }
        });
        return parsed;
    }
    /**
     * @param {?} item
     * @param {?} filter
     * @param {?} options
     * @return {?}
     */
    _onWhenAddingFileFailed(item, filter, options) {
        this.onWhenAddingFileFailed(item, filter, options);
    }
    /**
     * @param {?} item
     * @return {?}
     */
    _onAfterAddingFile(item) {
        this.onAfterAddingFile(item);
    }
    /**
     * @param {?} items
     * @return {?}
     */
    _onAfterAddingAll(items) {
        this.onAfterAddingAll(items);
    }
    /**
     * @param {?} item
     * @return {?}
     */
    _onBeforeUploadItem(item) {
        item._onBeforeUpload();
        this.onBeforeUploadItem(item);
    }
    /**
     * @param {?} item
     * @param {?} form
     * @return {?}
     */
    _onBuildItemForm(item, form) {
        item._onBuildForm(form);
        this.onBuildItemForm(item, form);
    }
    /**
     * @param {?} item
     * @param {?} progress
     * @return {?}
     */
    _onProgressItem(item, progress) {
        let /** @type {?} */ total = this._getTotalProgress(progress);
        this.progress = total;
        item._onProgress(progress);
        this.onProgressItem(item, progress);
        this.onProgressAll(total);
        this._render();
    }
    /**
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    _onSuccessItem(item, response, status, headers) {
        item._onSuccess(response, status, headers);
        this.onSuccessItem(item, response, status, headers);
    }
    /**
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    _onCancelItem(item, response, status, headers) {
        item._onCancel(response, status, headers);
        this.onCancelItem(item, response, status, headers);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class FileSelectDirective {
    /**
     * @param {?} element
     */
    constructor(element) {
        this.onFileSelected = new EventEmitter();
        this.element = element;
    }
    /**
     * @return {?}
     */
    getOptions() {
        return this.uploader.options;
    }
    /**
     * @return {?}
     */
    getFilters() {
        return {};
    }
    /**
     * @return {?}
     */
    isEmptyAfterSelection() {
        return !!this.element.nativeElement.attributes.multiple;
    }
    /**
     * @return {?}
     */
    onChange() {
        let /** @type {?} */ files = this.element.nativeElement.files;
        let /** @type {?} */ options = this.getOptions();
        let /** @type {?} */ filters = this.getFilters();
        this.uploader.addToQueue(files, options, filters);
        this.onFileSelected.emit(files);
        if (this.isEmptyAfterSelection()) {
            this.element.nativeElement.value = '';
        }
    }
}
FileSelectDirective.decorators = [
    { type: Directive, args: [{ selector: '[ng2FileSelect]' },] },
];
/** @nocollapse */
FileSelectDirective.ctorParameters = () => [
    { type: ElementRef, },
];
FileSelectDirective.propDecorators = {
    "uploader": [{ type: Input },],
    "onFileSelected": [{ type: Output },],
    "onChange": [{ type: HostListener, args: ['change',] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class FileDropDirective {
    /**
     * @param {?} element
     */
    constructor(element) {
        this.fileOver = new EventEmitter();
        this.onFileDrop = new EventEmitter();
        this.element = element;
    }
    /**
     * @return {?}
     */
    getOptions() {
        return this.uploader.options;
    }
    /**
     * @return {?}
     */
    getFilters() {
        return {};
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onDrop(event) {
        let /** @type {?} */ transfer = this._getTransfer(event);
        if (!transfer) {
            return;
        }
        let /** @type {?} */ options = this.getOptions();
        let /** @type {?} */ filters = this.getFilters();
        this._preventAndStop(event);
        this.uploader.addToQueue(transfer.files, options, filters);
        this.fileOver.emit(false);
        this.onFileDrop.emit(transfer.files);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onDragOver(event) {
        let /** @type {?} */ transfer = this._getTransfer(event);
        if (!this._haveFiles(transfer.types)) {
            return;
        }
        transfer.dropEffect = 'copy';
        this._preventAndStop(event);
        this.fileOver.emit(true);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onDragLeave(event) {
        if ((/** @type {?} */ (this)).element) {
            if (event.currentTarget === (/** @type {?} */ (this)).element[0]) {
                return;
            }
        }
        this._preventAndStop(event);
        this.fileOver.emit(false);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    _getTransfer(event) {
        return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer; // jQuery fix;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    _preventAndStop(event) {
        event.preventDefault();
        event.stopPropagation();
    }
    /**
     * @param {?} types
     * @return {?}
     */
    _haveFiles(types) {
        if (!types) {
            return false;
        }
        if (types.indexOf) {
            return types.indexOf('Files') !== -1;
        }
        else if (types.contains) {
            return types.contains('Files');
        }
        else {
            return false;
        }
    }
}
FileDropDirective.decorators = [
    { type: Directive, args: [{ selector: '[ng2FileDrop]' },] },
];
/** @nocollapse */
FileDropDirective.ctorParameters = () => [
    { type: ElementRef, },
];
FileDropDirective.propDecorators = {
    "uploader": [{ type: Input },],
    "fileOver": [{ type: Output },],
    "onFileDrop": [{ type: Output },],
    "onDrop": [{ type: HostListener, args: ['drop', ['$event'],] },],
    "onDragOver": [{ type: HostListener, args: ['dragover', ['$event'],] },],
    "onDragLeave": [{ type: HostListener, args: ['dragleave', ['$event'],] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class FileUploadModule {
}
FileUploadModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [FileDropDirective, FileSelectDirective],
                exports: [FileDropDirective, FileSelectDirective]
            },] },
];
/** @nocollapse */
FileUploadModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

export { FileUploadModule, FileSelectDirective, FileDropDirective, FileUploader, FileItem, FileLikeObject };
//# sourceMappingURL=meepo-file-upload.js.map
