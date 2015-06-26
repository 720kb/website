<!--
// Email obfuscator script 2.1 by Tim Williams, University of Arizona
// Random encryption key feature by Andrew Moulden, Site Engineering Ltd
// This code is freeware provided these four comment lines remain intact
// A wizard to generate this code is at http://www.jottings.com/obfuscator/
	var mailIDs = [document.getElementById('tech-mail'), document.getElementById('info-mail'), document.getElementById('business-mail')];
//business and info
{ coded = 'zZJv@LPNh9.ZSj'
  key = 'QrpCZe9GwiN5JLaMYmES4TOzHqsD82kt3AKUxoIc1BRPhjuy6VdvnlbFXg0Wf7'
  shift = coded.length
  link = ''
  for (i = 0; i < coded.length; i += 1) {
    if (key.indexOf(coded.charAt(i))==-1) {
      ltr = coded.charAt(i)
      link += (ltr)
    }
    else {
      ltr = (key.indexOf(coded.charAt(i))-shift+key.length) % key.length
      link += (key.charAt(ltr))
    }
  }
  mailIDs[1].innerHTML = '<a href="mailto:' + link + ';?subject=Generic" class="btn-badge btn-small btn-outline btn-block center-content color-lightblue"><i class="fa fa-envelope-o"></i>&nbsp;&nbsp;Generic &nbsp;&nbsp;</a>';
  mailIDs[2].innerHTML = '<a href="mailto:' + link + ';?subject=Business" class="btn-badge btn-small btn-outline btn-block center-content color-lightblue"><i class="fa fa-envelope-o"></i>&nbsp;&nbsp;Business &nbsp;&nbsp;</a>';
  //tech
  {
  coded = '2cpi@w9k3R.Dc2'
  key = 'MzovL7DCPc02W5UNuAbwVadpk9gXBOK1Rh6Elr34fSFxqJHi8mIjGynZYestQT'
  shift = coded.length
  link = ''
  for (i = 0; i < coded.length; i += 1) {
    if (key.indexOf(coded.charAt(i))==-1) {
      ltr = coded.charAt(i)
      link += (ltr)
    }
    else {
      ltr = (key.indexOf(coded.charAt(i))-shift+key.length) % key.length
      link += (key.charAt(ltr))
    }
  }
mailIDs[0].innerHTML = '<a href="mailto:' + link +';?subject=Tech" class="btn-badge btn-small btn-outline btn-block center-content color-lightblue"><i class="fa fa-envelope-o"></i>&nbsp;&nbsp;Technical &nbsp;</a>';
}
}
//-->
