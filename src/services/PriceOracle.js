import BigNumber from 'bignumber.js';

const usdPrecession = 2;
const btPrecession = 2;

export default class PriceOracle {
  constructor(token, pricePoints) {
    if ( !token ) {
      //Assign token to an empty object so that fallback values apply.
      token = {};
    }
    if ( !pricePoints ) {
      //Assign pricePoints to an empty object so that fallback values apply.
      pricePoints = {};
    }

    this.conversionFactor = token.conversion_factor || 1;

    this.decimals = token.decimals || 18;

    if (pricePoints.hasOwnProperty(token.base_token)) {
			this.pricePoint = pricePoints[token.base_token]['USD'];
    }
  }

  btToFiat(bt , precession) {
    if (!bt || !this.pricePoint || isNaN(bt)) {
      return '';
    }
    bt = BigNumber(bt);
    let fiatBN = BigNumber(this.pricePoint);
    let oneBtToFiat = fiatBN.dividedBy(this.conversionFactor);
    let result = oneBtToFiat.multipliedBy(bt);
    return this.toFiat(result , precession );
  }

  toFiat(fiat , precession ) {
    if (!fiat || isNaN(fiat)) {
      return '';
    }
    precession =  precession || usdPrecession ;
    fiat = String(fiat);
    fiat = BigNumber(fiat);
    return fiat.toFixed(precession);
  }

  fiatToBt(fiat) {
    if (!fiat || !this.pricePoint || isNaN(fiat)) {
      return '';
    }
    fiat = BigNumber(fiat);
    let fiatBN = BigNumber(this.pricePoint);
    let totalSc = fiat.dividedBy(fiatBN);
    let totalBt = totalSc.multipliedBy(this.conversionFactor);
    return this.toBt(totalBt);
  }

  toBt(bt) {
    return PriceOracle.toBt(bt);
  }

  toDecimal(val) {
    return PriceOracle.toDecimal(val, this.decimals);
  }

  fromDecimal(val) {
    return PriceOracle.fromDecimal(val, this.decimals);
  }

  static fromDecimal(val, decimals) {
    if (!val || !decimals) return '';
    val = BigNumber(val);
    let exp = BigNumber(10).exponentiatedBy(decimals);
    return val.dividedBy(exp).toString(10);
  }

  static toDecimal(val, decimals) {
    if (!val || !decimals ) return '';
    val = BigNumber(val);
    let exp = BigNumber(10).exponentiatedBy(decimals);
    return val.multipliedBy(exp).toString(10);
  }

  static toBt(bt, precession) {
    if (!bt || isNaN(bt)) {
      return '';
    }
    precession = precession || btPrecession;
    bt = String(bt);
    bt = BigNumber(bt);
    return bt.decimalPlaces(precession, 1).toString(10);
  }
}
