/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

// The editor creator to use.
import InlineEditorBase from '@ckeditor/ckeditor5-editor-inline/src/inlineeditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Font from '@ckeditor/ckeditor5-font/src/font';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import Subscript from '@ckeditor/ckeditor5-basic-styles/src/subscript';
import Superscript from '@ckeditor/ckeditor5-basic-styles/src/superscript';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import SimpleUpload from 'ckeditor5-simple-upload/src/simpleupload';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import TextColor from 'ckeditor-text-color-select/src/textcolor';
import HighlightColor from 'ckeditor5-custom-highlighter/src/highlightcolor';
import IndentText from 'ckeditor5-indent-text/src/indent-text';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';

export default class InlineEditor extends InlineEditorBase {
}

// Plugins to include in the build.
InlineEditor.builtinPlugins = [
  Essentials,
  Autoformat,
  Font,
  Bold,
  Italic,
  Underline,
  Strikethrough,
  Subscript,
  Superscript,
  Heading,
  Image,
  ImageStyle,
  ImageToolbar,
  ImageUpload,
  SimpleUpload,
  Link,
  List,
  Paragraph,
  PasteFromOffice,
  Table,
  TableToolbar,
  TextColor,
  HighlightColor,
  IndentText,
  Alignment
];

// Editor configuration.
InlineEditor.defaultConfig = {
  toolbar: {
    items: [
      'heading',
      '|',
      'fontSize',
      'bold',
      'italic',
      'underline',
      'strikethrough',
      'subscript',
      'superscript',
      'textColor',
      'highlightColor',
      '|',
      'bulletedList',
      'numberedList',
      'indentLeft',
      'indentRight',
      'alignment',
      '|',
      'imageUpload',
      'insertTable',
      'link',
      '|',
      'undo',
      'redo',
    ]
  },
  image: {
    toolbar: ['imageTextAlternative', '|', 'imageStyle:alignLeft', 'imageStyle:full', 'imageStyle:alignRight'],
    styles: ['full', 'alignLeft', 'alignRight']
  },
  table: {
    contentToolbar: [
      'tableColumn',
      'tableRow',
      'mergeTableCells'
    ]
  },
  heading: {
    options: [
      {model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph'},
      {model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1'},
      {model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2'},
      {model: 'heading3', view: 'h3', title: 'Heading 3', class: 'ck-heading_heading3'},
    ],
  },
  fontSize: {
    options: [8, 9, 10, 11, 12, 13, 'default', 16, 18, 20, 22, 24, 26, 28, 36, 48, 72],
  },
  indentText: {
    options: {
      indentLength: 40,
      indentMeasure: 'px',
    },
  },
  // This value must be kept in sync with the language defined in webpack.config.js.
  language: 'en'
};
