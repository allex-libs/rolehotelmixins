function createServiceMixin (lib) {
  'use strict';

  var zeroString = String.fromCharCode(0);

  function RoleBasedHotelServiceMixin (prophash) {
    this.hotelRole = prophash.hotelrole;
  }

  RoleBasedHotelServiceMixin.prototype.destroy = function () {
    this.hotelRole = null;
  };

  RoleBasedHotelServiceMixin.prototype.destroy = function () {
    this.hotelRole = null;
  };

  RoleBasedHotelServiceMixin.prototype.outerName2ApartmentName = function (outername) {
    var sp;
    if (!lib.isString(outername)) {
      return '';
    }
    sp = outername.split(zeroString);
    if (sp.length !== 2) {
      return '';
    }
    return sp[1];
  };

  RoleBasedHotelServiceMixin.prototype.apartmentName2OuterName = function (apartmentname) {
    return this.hotelRole+zeroString+apartmentname;
  };


  RoleBasedHotelServiceMixin.propertyHashDescriptor = {
    hotelrole: {
      type: 'string'
    }
  };

  RoleBasedHotelServiceMixin.addMethods = function (klass) {
    lib.inheritMethods(klass, RoleBasedHotelServiceMixin
      ,'outerName2ApartmentName'
      ,'apartmentName2OuterName'
    );
  };

  return RoleBasedHotelServiceMixin;
}

module.exports = createServiceMixin;
