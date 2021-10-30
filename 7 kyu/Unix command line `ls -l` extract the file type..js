// Unix command line `ls -l` extract the file type.
function linuxType(fileAttribute) {
  if (fileAttribute.match(/^-/)) {
    return 'file'
  } else if (fileAttribute.match(/^d/)) {
    return 'directory'
  } else if (fileAttribute.match(/^l/)) {
    return 'symlink'
  } else if (fileAttribute.match(/^c/)) {
    return 'character_file'
  } else if (fileAttribute.match(/^b/)) {
    return 'block_file'
  } else if (fileAttribute.match(/^p/)) {
    return 'pipe'
  } else if (fileAttribute.match(/^s/)) {
    return 'socket'
  } else if (fileAttribute.match(/^D/)) {
    return 'door'
  }
}

function linuxType(fileAttribute) {
  var fileTypes = {
    '-': 'file',
    'd': 'directory',
    'l': 'symlink',
    'c': 'character_file',
    'b': 'block_file',
    'p': 'pipe',
    's': 'socket',
    'D': 'door',
  };

  return fileTypes[fileAttribute[0]];
}
