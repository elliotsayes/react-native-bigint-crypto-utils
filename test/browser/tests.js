// For the browser test builder to work you MUST import them module in a variable that
// is the camelised version of the package name.



const inputs = [
    {
        value: BigInt(1),
        abs: BigInt(1)
    },
    {
        value: BigInt(-2),
        abs: BigInt(2)
    },
    {
        value: BigInt('115922179551495973383410176342643722334557255682879605864838806293659619625004303206250384392546855063844106965156287951749387634112551089284595541103692716528774876311641700929986988023197242224581099872580798960693521778607396791006450968430359009613295725905514216842343121690916290236558767890728449777'),
        abs: BigInt('115922179551495973383410176342643722334557255682879605864838806293659619625004303206250384392546855063844106965156287951749387634112551089284595541103692716528774876311641700929986988023197242224581099872580798960693521778607396791006450968430359009613295725905514216842343121690916290236558767890728449777')
    },
    {
        value: BigInt('-918145944120889203205646923554374144932845997937845799234617798611046542304088105084854788397071323714642587188481158334265864050544813693415594035822877094557870151480865568334936301231664228940480803192289508235412296324312748621874408067955753620604885023289655277704554716080844406284392300643321715285709865081125252390440327650852470312931679380011885102491340191287595160450544053114365852338670819405357496612993587404998677760882578064637552397840566752638770525765833183986360029736508910848408875329873614164495552615086579144675027852136994842529623698055210822311666048300438808691619782893307972452223713060928388502843564836966586109748062827799521852219158489504529458627699284110902303538160168376473182639384638674469114371472053977558648090155686345760457454061117853710619580819749222459422610617170567016772342291486643520567969321969827786373531753524990712622940069883277763528926899970596407140603912036918433859986491820017690762751824769335720368488097262208835708414085501930989486498185503469986946236128468697606998536541209764920494156326791142098506801288127033229779646920082892258428128572765585196779698362187479280520327053508580551167899837393726371144977951402741307021389967382422805567365901203'),
        abs: BigInt('918145944120889203205646923554374144932845997937845799234617798611046542304088105084854788397071323714642587188481158334265864050544813693415594035822877094557870151480865568334936301231664228940480803192289508235412296324312748621874408067955753620604885023289655277704554716080844406284392300643321715285709865081125252390440327650852470312931679380011885102491340191287595160450544053114365852338670819405357496612993587404998677760882578064637552397840566752638770525765833183986360029736508910848408875329873614164495552615086579144675027852136994842529623698055210822311666048300438808691619782893307972452223713060928388502843564836966586109748062827799521852219158489504529458627699284110902303538160168376473182639384638674469114371472053977558648090155686345760457454061117853710619580819749222459422610617170567016772342291486643520567969321969827786373531753524990712622940069883277763528926899970596407140603912036918433859986491820017690762751824769335720368488097262208835708414085501930989486498185503469986946236128468697606998536541209764920494156326791142098506801288127033229779646920082892258428128572765585196779698362187479280520327053508580551167899837393726371144977951402741307021389967382422805567365901203')
    }
];

describe('abs', function () {
    for (const input of inputs) {
        let ret;
        describe(`abs(${input.value})`, function () {
            it(`should return ${input.abs}`, function () {
                ret = bigintCryptoUtils.abs(input.value);
                chai.expect(ret).to.equal(input.abs);
            });
        });
    }
});

// For the browser test builder to work you MUST import them module in a variable that
// is the camelised version of the package name.



const inputs$1 = [
    {
        value: BigInt(1),
        bitLength: 1
    },
    {
        value: BigInt(-2),
        bitLength: 2
    },
    {
        value: BigInt(11592217955149597331),
        abs: BigInt(11592217955149597331),
        bitLength: 64
    }
];

describe('bitLength', function () {
    for (const input of inputs$1) {
        let ret;
        describe(`bitLength(${input.value})`, function () {
            it(`should return ${input.bitLength}`, function () {
                ret = bigintCryptoUtils.bitLength(input.value);
                chai.expect(ret).to.equal(input.bitLength);
            });
        });
    }
});

// For the browser test builder to work you MUST import them module in a variable that
// is the camelised version of the package name.



const inputs$2 = [
    {
        a: BigInt(1),
        b: BigInt(1),
        gcd: BigInt(1)
    },
    {
        a: BigInt(0),
        b: BigInt(189),
        gcd: BigInt(189)
    },
    {
        a: BigInt(189),
        b: BigInt(0),
        gcd: BigInt(189)
    },
    {
        a: BigInt(0),
        b: BigInt(0),
        gcd: BigInt(0)
    },
    {
        a: BigInt(1),
        b: BigInt('14546149867129487614601346814'),
        gcd: BigInt(1)
    },
    {
        a: BigInt(27),
        b: BigInt(18),
        gcd: BigInt(9)
    },
    {
        a: BigInt(-27),
        b: BigInt(18),
        gcd: BigInt(9)
    },
    {
        a: BigInt('168694196579467171180863939518634764192343817610869919231900537093664715354591592262546800497540343203057121816378265655992490621138321114570420047522219942818258345349322155251835677199539229050711145144861404607171419723967136221126986330819362088262358855325306938646602003059377699727688477555163239222109'),
        b: BigInt('168694196579467171180863939518634764192343817610869919231900537093664715354591592262546800497540343203057121816378265655992490621138321114570420047522219942818258345349322155251835677199539229050711145144861404607171419723967136221126986330819362088262358855325306938646602003059377699727688477555163239222109') * BigInt('144678545212641449725111562354371812236197961234111744040227045242578772124779004756249085154188369039159690638725821245974978963371615699005072473649705367893567309027634121825164880046600125480885803891136149601797439273507802533807541605261215613891134865916295914192271736572001975016089773532547481638243'),
        gcd: BigInt('168694196579467171180863939518634764192343817610869919231900537093664715354591592262546800497540343203057121816378265655992490621138321114570420047522219942818258345349322155251835677199539229050711145144861404607171419723967136221126986330819362088262358855325306938646602003059377699727688477555163239222109')
    }
];

describe('gcd', function () {
    for (const input of inputs$2) {
        let ret;
        describe(`gcd(${input.a}, ${input.b})`, function () {
            it(`should return ${input.gcd}`, function () {
                ret = bigintCryptoUtils.gcd(input.a, input.b);
                chai.expect(ret).to.equal(input.gcd);
            });
        });
    }
});

// For the browser test builder to work you MUST import them module in a variable that
// is the camelised version of the package name.



const numbers = [
    {
        value: BigInt(1),
        prime: false
    },
    {
        value: BigInt(2),
        prime: true
    },
    {
        value: 3,
        prime: true
    },
    {
        value: BigInt(15),
        prime: false
    },
    {
        value: 29,
        prime: true
    },
    {
        value: BigInt('669483106578092405936560831017556154622901950048903016651289'),
        prime: true
    },
    {
        value: BigInt('2074722246773485207821695222107608587480996474721117292752992589912196684750549658310084416732550077'),
        prime: true
    },
    {
        value: BigInt('2074722246773485207821695222107608587480996474721117292752992589912196684750549658310084416732550079'),
        prime: false
    },
    {
        value: BigInt('115922179551495973383410176342643722334557255682879605864838806293659619625004303206250384392546855063844106965156287951749387634112551089284595541103692716528774876311641700929986988023197242224581099872580798960693521778607396791006450968430359009613295725905514216842343121690916290236558767890728449777'),
        prime: true
    },
    {
        value: BigInt('168694196579467171180863939518634764192343817610869919231900537093664715354591592262546800497540343203057121816378265655992490621138321114570420047522219942818258345349322155251835677199539229050711145144861404607171419723967136221126986330819362088262358855325306938646602003059377699727688477555163239222109') * BigInt('144678545212641449725111562354371812236197961234111744040227045242578772124779004756249085154188369039159690638725821245974978963371615699005072473649705367893567309027634121825164880046600125480885803891136149601797439273507802533807541605261215613891134865916295914192271736572001975016089773532547481638243'),
        prime: false
    },
    {
        value: BigInt('918145944120889203205646923554374144932845997937845799234617798611046542304088105084854788397071323714642587188481158334265864050544813693415594035822877094557870151480865568334936301231664228940480803192289508235412296324312748621874408067955753620604885023289655277704554716080844406284392300643321715285709865081125252390440327650852470312931679380011885102491340191287595160450544053114365852338670819405357496612993587404998677760882578064637552397840566752638770525765833183986360029736508910848408875329873614164495552615086579144675027852136994842529623698055210822311666048300438808691619782893307972452223713060928388502843564836966586109748062827799521852219158489504529458627699284110902303538160168376473182639384638674469114371472053977558648090155686345760457454061117853710619580819749222459422610617170567016772342291486643520567969321969827786373531753524990712622940069883277763528926899970596407140603912036918433859986491820017690762751824769335720368488097262208835708414085501930989486498185503469986946236128468697606998536541209764920494156326791142098506801288127033229779646920082892258428128572765585196779698362187479280520327053508580551167899837393726371144977951402741307021389967382422805567365901203'),
        prime: true
    },
    {
        value: BigInt('940719693126280825126763871881743336375040232953039527942717290104060740215493004508206768342926022549956464101136893240409560470269654765366248516968645294076406953865805712688760371102637642013723011744011617678651884521901163090779813242269935310225049805992299292275574585773507915278612311449919050091057023179541184986547995894821648553256021675133997240195429424258757033557367142630663053464438840832073753440939208165158795269598771598124509831433327480118038278887538430675994497384283550890544882369140852048496460551123626856255619494025370171790720106325655890348475483349150258338517508459674722099347335608814922179633411167540545786247819334838979610017735984374883325689517847175539632896026875016305529321705457954181425405794479825617747354596485074451489940385640535898876551301296003465792117006135339109817937663957519031436646579178503423889430062127572272773511424424297800355292430651838502733756881154935252456036638082486459287411002911323257940893413982671660332662880068976408321968046549017547143836993553556640198884769590214676797037397502067035957959952990027503148987727895561468097917730167320715053689862847457761993196945361244822787209076446259359976421264285658106819879849052247546957718175231'),
        prime: false
    }
];

describe('isProbablyPrime', function () {
    for (const num of numbers) {
        describe(`isProbablyPrime(${num.value})`, function () {
            it(`should return ${num.prime}`, async function () {
                const ret = await bigintCryptoUtils.isProbablyPrime(num.value);
                chai.expect(ret).to.equal(num.prime);
            });
        });
    }
});

// For the browser test builder to work you MUST import them module in a variable that
// is the camelised version of the package name.



const inputs$3 = [
    {
        a: BigInt(1),
        b: BigInt(1),
        lcm: BigInt(1)
    },
    {
        a: BigInt(1),
        b: BigInt('14546149867129487614601346814'),
        lcm: BigInt('14546149867129487614601346814')
    },
    {
        a: BigInt(27),
        b: BigInt(18),
        lcm: BigInt(27) * BigInt(2)
    },
    {
        a: BigInt(-27),
        b: BigInt(18),
        lcm: BigInt(27) * BigInt(2)
    },
    {
        a: BigInt('168694196579467171180863939518634764192343817610869919231900537093664715354591592262546800497540343203057121816378265655992490621138321114570420047522219942818258345349322155251835677199539229050711145144861404607171419723967136221126986330819362088262358855325306938646602003059377699727688477555163239222109'),
        b: BigInt('168694196579467171180863939518634764192343817610869919231900537093664715354591592262546800497540343203057121816378265655992490621138321114570420047522219942818258345349322155251835677199539229050711145144861404607171419723967136221126986330819362088262358855325306938646602003059377699727688477555163239222109') * BigInt('144678545212641449725111562354371812236197961234111744040227045242578772124779004756249085154188369039159690638725821245974978963371615699005072473649705367893567309027634121825164880046600125480885803891136149601797439273507802533807541605261215613891134865916295914192271736572001975016089773532547481638243'),
        lcm: BigInt('168694196579467171180863939518634764192343817610869919231900537093664715354591592262546800497540343203057121816378265655992490621138321114570420047522219942818258345349322155251835677199539229050711145144861404607171419723967136221126986330819362088262358855325306938646602003059377699727688477555163239222109') * BigInt('144678545212641449725111562354371812236197961234111744040227045242578772124779004756249085154188369039159690638725821245974978963371615699005072473649705367893567309027634121825164880046600125480885803891136149601797439273507802533807541605261215613891134865916295914192271736572001975016089773532547481638243'),
    }
];

describe('lcm', function () {
    for (const input of inputs$3) {
        let ret;
        describe(`lcm(${input.a}, ${input.b})`, function () {
            it(`should return ${input.lcm}`, function () {
                ret = bigintCryptoUtils.lcm(input.a, input.b);
                chai.expect(ret).to.equal(input.lcm);
            });
        });
    }
});

// For the browser test builder to work you MUST import them module in a variable that
// is the camelised version of the package name.



const inputs$4 = [
    {
        a: BigInt(1),
        n: BigInt(19),
        modInv: BigInt(1)
    },
    {
        a: BigInt(2),
        n: BigInt(5),
        modInv: BigInt(3)
    },
    {
        a: BigInt(-2),
        n: BigInt(5),
        modInv: BigInt(2)
    },
    {
        a: BigInt(2),
        n: BigInt(4),
        modInv: NaN
    }
];

describe('modInv', function () {
    let ret;
    for (const input of inputs$4) {
        describe(`modInv(${input.a}, ${input.n})`, function () {
            it(`should return ${input.modInv}`, function () {
                ret = bigintCryptoUtils.modInv(input.a, input.n);
                // chai.assert( String(ret) === String(input.modInv) );
                chai.expect(String(ret)).to.be.equal(String(input.modInv));
            });
        });
    }
});

// For the browser test builder to work you MUST import them module in a variable that
// is the camelised version of the package name.



const inputs$5 = [
    {
        a: BigInt(4),
        b: BigInt(-1),
        n: BigInt(19),
        modPow: BigInt(5)
    },
    {
        a: BigInt(-5),
        b: BigInt(2),
        n: BigInt(7),
        modPow: BigInt(4)
    },
    {
        a: BigInt(2),
        b: BigInt(255),
        n: BigInt(64),
        modPow: BigInt(0)
    },
    {
        a: BigInt(3),
        b: BigInt(3),
        n: BigInt(25),
        modPow: BigInt(2)
    }
];

describe('modPow', function () {
    for (const input of inputs$5) {
        let ret;
        describe(`modPow(${input.a}, ${input.b}, ${input.n})`, function () {
            it(`should return ${input.modPow}`, function () {
                ret = bigintCryptoUtils.modPow(input.a, input.b, input.n);
                chai.expect(ret).to.equal(input.modPow);
            });
        });
    }
});

// For the browser test builder to work you MUST import them module in a variable that
// is the camelised version of the package name.



const bitLengths = [
    1024,
    2048,
    3072,
    4096
];

describe('prime', function () {
    for (const bitLength of bitLengths) {
        describe(`prime(${bitLength})`, function () {
            it(`should return a random ${bitLength}-bits probable prime`, async function () {
                let prime = await bigintCryptoUtils.prime(bitLength);
                let primeBitLength = bigintCryptoUtils.bitLength(prime);
                chai.expect(primeBitLength).to.equal(bitLength);
            });
        });
    }
});

// For the browser test builder to work you MUST import them module in a variable that
// is the camelised version of the package name.



const inputs$6 = [
    {
        a: BigInt(1),
        n: BigInt(19),
        toZn: BigInt(1)
    },
    {
        a: BigInt(-25),
        n: BigInt(9),
        toZn: BigInt(2)
    },
    {
        a: BigInt('12359782465012847510249'),
        n: BigInt(5),
        toZn: BigInt(4)
    }
];

describe('toZn', function () {
    for (const input of inputs$6) {
        let ret;
        describe(`toZn(${input.a}, ${input.n})`, function () {
            it(`should return ${input.toZn}`, function () {
                ret = bigintCryptoUtils.toZn(input.a, input.n);
                chai.expect(ret).to.equal(input.toZn);
            });
        });
    }
});
