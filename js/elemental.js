// github.com/Rexxt/elemental.js

let elemental = {
    knownComponents: {},
    create: function(creator, name) {
        if(name === undefined)
            name = creator.name;
        this.knownComponents[name.toLowerCase()] = creator;
        return name;
    },
    makeAttributeObject: function(nodeMap) {
        let attributes = {};
        for (const attr of nodeMap) {
            attributes[attr.name] = attr.value;
        }
        return attributes;
    },
    renderType: function(type) {
        const creator = this.knownComponents[type.toLowerCase()];

        const elements = document.getElementsByTagName(type);
        for (const element of elements) {
            element.innerHTML = creator(this.makeAttributeObject(element.attributes));
        }
    },
    render: function() {
        for (const key of Object.keys(this.knownComponents)) {
            this.renderType(key);
        }
        return true;
    },
    renderId: function(id) {
        const element = document.getElementById(id);
        const type = element.nodeName;
        const creator = this.knownComponents[type.toLowerCase()];
        element.innerHTML = creator(this.makeAttributeObject(element.attributes));
    }
};

document.addEventListener('DOMContentLoaded', (event) => {
    elemental.render();
});