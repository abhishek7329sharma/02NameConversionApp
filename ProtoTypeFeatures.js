//? This file loads on top of nameConversion.js

// adding custom toCamelCase function into protoType
String.prototype.toCamelCase = function () {
    return this.replace(/^([A-Z])|\s(\w)/g, function (match, p1, p2, offset) {
        if (p2) return p2.toUpperCase();
        return p1.toLowerCase();
    });
};

// adding custom toPascalCase function into protoType
String.prototype.toPascalCase = function () {
    return this
        .toLowerCase()
        .replace(new RegExp(/[-_]+/, 'g'), ' ')
        .replace(new RegExp(/[^\w\s]/, 'g'), '')
        .replace(
            new RegExp(/\s+(.)(\w*)/, 'g'),
            ($1, $2, $3) => `${$2.toUpperCase() + $3}`
        )
        .replace(new RegExp(/\w/), s => s.toUpperCase());
};

// adding custom toSnakeCase function into protoType
String.prototype.toSnakeCase = function () {
    return this.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
        .map(x => x.toLowerCase())
        .join('_');
};

// adding custom toScreamingSnakeCase function into protoType
String.prototype.toScreamingSnakeCase = function () {
    return this.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
        .map(x => x.toUpperCase())
        .join('_');
};

// adding custom toKebabCase function into protoType
String.prototype.toKebabCase = function () {
    return this.replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, '-')
    .toLowerCase();
};

// adding custom toScreamingKebabCase function into protoType
String.prototype.toScreamingKebabCase = function () {
    return this.replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, '-')
    .toUpperCase();
};
