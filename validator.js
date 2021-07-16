const terra = new Terra.LCDClient({
    URL: "https://lcd.terra.dev/",
    chainID: "columbus-4"
})

const pegasusAddress = "terravaloper1wdpwudvc639tpy952n2myre6uckuqdu3h9suke"

terra.staking.validator(pegasusAddress).then(function(validator) {
    const shares = Math.round(validator.delegator_shares.toNumber() / 1000000)
    stake.innerHTML = shares+" LUNA"
})

