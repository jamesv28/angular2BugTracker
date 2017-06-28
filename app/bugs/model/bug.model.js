"use strict";
var Bug = (function () {
    function Bug(id, title, status, severity, description, createdBy, updatedBy, updatedDate) {
        this.id = id;
        this.title = title;
        this.status = status;
        this.severity = severity;
        this.description = description;
        this.createdBy = createdBy;
        this.updatedBy = updatedBy;
        this.updatedDate = updatedDate;
    }
    return Bug;
}());
exports.Bug = Bug;
//# sourceMappingURL=bug.model.js.map