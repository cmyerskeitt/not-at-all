function howMuchILoveYou(nbPetals) {
    let statements = ["I love you", "a little", "a lot", "passionately", "madly", "not at all"]
    return statements[(nbPetals - 1) % statements.length]
}
