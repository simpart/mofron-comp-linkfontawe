/**
 * @file   mofron-comp-linkiconif/index.js
 * @brief  
 * @author simpart
 */
const mf = require('mofron');
const Icon = require('mofron-comp-fontawesome');
const Link = require('mofron-event-link');

mf.comp.LinkFontawe = class extends Icon {
    
    /**
     * initialize component
     * 
     * @param po paramter or option
     */
    constructor (po) {
        try {
            super();
            this.name('LinkFontawe');
            this.prmOpt(po);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * initialize dom contents
     * 
     * @npte private method
     */
    initDomConts () {
        try {
            super.initDomConts();
            this.size('0.5rem');
            this.mainColor([ 128, 128, 128 ]);
            this.event([ new Link() ]);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    url (prm) {
        try {
            return this.event("Link").url(
                prm, (undefined !== prm) ? true : undefined
            );
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    
}
module.exports = mf.comp.LinkFontawe;
/* end of file */
