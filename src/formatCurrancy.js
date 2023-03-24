const CURRENCY_FORMATTER=new Intl.NumberFormat(undefined,{currency:"INR",style:"currency"})

const formatCurrancy = (number) => {
  return CURRENCY_FORMATTER.format(number);
  
}

export default formatCurrancy
