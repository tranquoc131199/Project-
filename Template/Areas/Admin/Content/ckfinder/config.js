/*
Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
For licensing, see license.txt or http://cksource.com/ckfinder/license
*/

CKFinder.customConfig = function( config )
{
    config.language = 'en';
    config.filebrowserBrowseUrl = '/Areas/Admin/Content/ckfinder/ckfinder.html';
    config.filebrowserImageUrl = '/Areas/Admin/Content/ckfinder/ckfinder.html?type=Images';
    config.filebrowserFlashUrl = '/Areas/Admin/Content/ckfinder/ckfinder.html?type=Flash';
    config.filebrowserUploadUrl = '/Areas/Admin/Content/ckfinder/core/connector/aspx/connector.aspx?command=QuickUpload&type=Files';
    config.filebrowserImageUploadUrl = '/Areas/Admin/Content/ckfinder/core/connector/aspx/connector.aspx?command=QuickUpload&type=Images';
    config.filebrowserFlashUploadUrl = '/Areas/Admin/Content/ckfinder/core/connector/aspx/connector.aspx?command=QuickUpload&type=Flash';
    config.SelectMultiple = true;
};
