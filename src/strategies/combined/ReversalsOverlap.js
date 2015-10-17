var Base = require('./Base');
var studies = require('../../studies');
var Call = require('../../positions/Call');
var Put = require('../../positions/Put');

var configurations = [
    {
        "ema200" : true,
        "ema100" : false,
        "ema50" : true,
        "sma13" : true,
        "rsi" : {
            "rsi" : "rsi7",
            "overbought" : 80,
            "oversold" : 20
        },
        "prChannel" : {
            "upper" : "prChannelUpper100_2_19",
            "lower" : "prChannelLower100_2_19"
        },
        "trendPrChannel" : {
            "regression" : "trendPrChannel500_2"
        }
    },{
        "ema200" : true,
        "ema100" : false,
        "ema50" : true,
        "sma13" : true,
        "rsi" : {
            "rsi" : "rsi7",
            "overbought" : 80,
            "oversold" : 20
        },
        "prChannel" : {
            "upper" : "prChannelUpper100_2_21",
            "lower" : "prChannelLower100_2_21"
        },
        "trendPrChannel" : {
            "regression" : "trendPrChannel500_2"
        }
    },{
        "ema200" : true,
        "ema100" : true,
        "ema50" : true,
        "sma13" : true,
        "rsi" : {
            "rsi" : "rsi7",
            "overbought" : 77,
            "oversold" : 23
        },
        "prChannel" : {
            "upper" : "prChannelUpper100_2_215",
            "lower" : "prChannelLower100_2_215"
        },
        "trendPrChannel" : {
            "regression" : "trendPrChannel500_2"
        }
    },{
        "ema200" : true,
        "ema100" : false,
        "ema50" : true,
        "sma13" : false,
        "rsi" : {
            "rsi" : "rsi7",
            "overbought" : 77,
            "oversold" : 23
        },
        "prChannel" : {
            "upper" : "prChannelUpper200_3_195",
            "lower" : "prChannelLower200_3_195"
        },
        "trendPrChannel" : {
            "regression" : "trendPrChannel500_2"
        }
    },{
        "ema200" : true,
        "ema100" : false,
        "ema50" : true,
        "sma13" : true,
        "rsi" : {
            "rsi" : "rsi5",
            "overbought" : 80,
            "oversold" : 20
        },
        "prChannel" : {
            "upper" : "prChannelUpper100_2_195",
            "lower" : "prChannelLower100_2_195"
        },
        "trendPrChannel" : {
            "regression" : "trendPrChannel300_2"
        }
    },{
        "ema200" : true,
        "ema100" : false,
        "ema50" : true,
        "sma13" : false,
        "rsi" : {
            "rsi" : "rsi7",
            "overbought" : 77,
            "oversold" : 23
        },
        "prChannel" : {
            "upper" : "prChannelUpper200_3_20",
            "lower" : "prChannelLower200_3_20"
        },
        "trendPrChannel" : {
            "regression" : "trendPrChannel500_2"
        }
    },{
        "ema200" : true,
        "ema100" : false,
        "ema50" : true,
        "sma13" : false,
        "rsi" : {
            "rsi" : "rsi2",
            "overbought" : 95,
            "oversold" : 5
        },
        "prChannel" : {
            "upper" : "prChannelUpper200_3_215",
            "lower" : "prChannelLower200_3_215"
        },
        "trendPrChannel" : {
            "regression" : "trendPrChannel500_2"
        }
    },{
        "ema200" : true,
        "ema100" : false,
        "ema50" : true,
        "sma13" : false,
        "rsi" : {
            "rsi" : "rsi5",
            "overbought" : 80,
            "oversold" : 20
        },
        "prChannel" : {
            "upper" : "prChannelUpper250_3_215",
            "lower" : "prChannelLower250_3_215"
        },
        "trendPrChannel" : {
            "regression" : "trendPrChannel550_2"
        }
    },{
        "ema200" : true,
        "ema100" : false,
        "ema50" : true,
        "sma13" : false,
        "rsi" : {
            "rsi" : "rsi7",
            "overbought" : 80,
            "oversold" : 20
        },
        "prChannel" : {
            "upper" : "prChannelUpper300_2_19",
            "lower" : "prChannelLower300_2_19"
        },
        "trendPrChannel" : {
            "regression" : "trendPrChannel550_2"
        }
    },{
        "ema200" : false,
        "ema100" : true,
        "ema50" : false,
        "sma13" : true,
        "rsi" : {
            "rsi" : "rsi7",
            "overbought" : 80,
            "oversold" : 20
        },
        "prChannel" : {
            "upper" : "prChannelUpper300_2_19",
            "lower" : "prChannelLower300_2_19"
        },
        "trendPrChannel" : {
            "regression" : "trendPrChannel550_2"
        }
    },{
        "ema200" : true,
        "ema100" : true,
        "ema50" : true,
        "sma13" : true,
        "rsi" : {
            "rsi" : "rsi2",
            "overbought" : 95,
            "oversold" : 5
        },
        "prChannel" : {
            "upper" : "prChannelUpper250_3_21",
            "lower" : "prChannelLower250_3_21"
        },
        "trendPrChannel" : {
            "regression" : "trendPrChannel200_2"
        }
    },{
        "ema200" : true,
        "ema100" : false,
        "ema50" : true,
        "sma13" : false,
        "rsi" : {
            "rsi" : "rsi7",
            "overbought" : 80,
            "oversold" : 20
        },
        "prChannel" : {
            "upper" : "prChannelUpper250_3_21",
            "lower" : "prChannelLower250_3_21"
        },
        "trendPrChannel" : {
            "regression" : "trendPrChannel400_2"
        }
    },{
        "ema200" : true,
        "ema100" : true,
        "ema50" : true,
        "sma13" : false,
        "rsi" : {
            "rsi" : "rsi2",
            "overbought" : 95,
            "oversold" : 5
        },
        "prChannel" : {
            "upper" : "prChannelUpper300_3_195",
            "lower" : "prChannelLower300_3_195"
        },
        "trendPrChannel" : {
            "regression" : "trendPrChannel200_2"
        }
    },{
        "ema200" : true,
        "ema100" : false,
        "ema50" : true,
        "sma13" : false,
        "rsi" : {
            "rsi" : "rsi5",
            "overbought" : 80,
            "oversold" : 20
        },
        "prChannel" : {
            "upper" : "prChannelUpper250_2_215",
            "lower" : "prChannelLower250_2_215"
        },
        "trendPrChannel" : {
            "regression" : "trendPrChannel400_2"
        }
    },{
        "ema200" : true,
        "ema100" : true,
        "ema50" : false,
        "sma13" : true,
        "rsi" : {
            "rsi" : "rsi5",
            "overbought" : 80,
            "oversold" : 20
        },
        "prChannel" : {
            "upper" : "prChannelUpper300_4_21",
            "lower" : "prChannelLower300_4_21"
        },
        "trendPrChannel" : {
            "regression" : "trendPrChannel500_2"
        }
    },{
        "ema200" : true,
        "ema100" : false,
        "ema50" : true,
        "sma13" : true,
        "rsi" : {
            "rsi" : "rsi7",
            "overbought" : 77,
            "oversold" : 23
        },
        "prChannel" : {
            "upper" : "prChannelUpper250_4_19",
            "lower" : "prChannelLower250_4_19"
        },
        "trendPrChannel" : {
            "regression" : "trendPrChannel300_2"
        }
    }
];

var studyDefinitions = [
    {study: studies.Ema, inputs: {length: 200}, outputMap: {ema: 'ema200'}},
    {study: studies.Ema, inputs: {length: 100}, outputMap: {ema: 'ema100'}},
    {study: studies.Ema, inputs: {length: 50}, outputMap: {ema: 'ema50'}},
    {study: studies.Sma, inputs: {length: 13}, outputMap: {sma: 'sma13'}},
    {study: studies.Rsi, inputs: {length: 7}, outputMap: {rsi: 'rsi7'}},
    {study: studies.Rsi, inputs: {length: 5}, outputMap: {rsi: 'rsi5'}},
    {study: studies.Rsi, inputs: {length: 2}, outputMap: {rsi: 'rsi2'}},
    {study: studies.PolynomialRegressionChannel, inputs: {length: 100, degree: 2, deviations: 1.9}, outputMap: {regression: 'prChannel100_2_19', upper: 'prChannelUpper100_2_19', lower: 'prChannelLower100_2_19'}},
    {study: studies.PolynomialRegressionChannel, inputs: {length: 100, degree: 2, deviations: 1.95}, outputMap: {regression: 'prChannel100_2_195', upper: 'prChannelUpper100_2_195', lower: 'prChannelLower100_2_195'}},
    {study: studies.PolynomialRegressionChannel, inputs: {length: 100, degree: 2, deviations: 2.1}, outputMap: {regression: 'prChannel100_2_21', upper: 'prChannelUpper100_2_21', lower: 'prChannelLower100_2_21'}},
    {study: studies.PolynomialRegressionChannel, inputs: {length: 100, degree: 2, deviations: 2.15}, outputMap: {regression: 'prChannel100_2_215', upper: 'prChannelUpper100_2_215', lower: 'prChannelLower100_2_215'}},
    {study: studies.PolynomialRegressionChannel, inputs: {length: 200, degree: 3, deviations: 2.15}, outputMap: {regression: 'prChannel200_3_215', upper: 'prChannelUpper200_3_215', lower: 'prChannelLower200_3_215'}},
    {study: studies.PolynomialRegressionChannel, inputs: {length: 200, degree: 3, deviations: 2.0}, outputMap: {regression: 'prChannel200_3_20', upper: 'prChannelUpper200_3_20', lower: 'prChannelLower200_3_20'}},
    {study: studies.PolynomialRegressionChannel, inputs: {length: 200, degree: 3, deviations: 1.95}, outputMap: {regression: 'prChannel200_3_195', upper: 'prChannelUpper200_3_195', lower: 'prChannelLower200_3_195'}},
    {study: studies.PolynomialRegressionChannel, inputs: {length: 250, degree: 2, deviations: 2.15}, outputMap: {regression: 'prChannel250_2_215', upper: 'prChannelUpper250_2_215', lower: 'prChannelLower250_2_215'}},
    {study: studies.PolynomialRegressionChannel, inputs: {length: 250, degree: 3, deviations: 2.1}, outputMap: {regression: 'prChannel250_3_21', upper: 'prChannelUpper250_3_21', lower: 'prChannelLower250_3_21'}},
    {study: studies.PolynomialRegressionChannel, inputs: {length: 250, degree: 3, deviations: 2.15}, outputMap: {regression: 'prChannel250_3_215', upper: 'prChannelUpper250_3_215', lower: 'prChannelLower250_3_215'}},
    {study: studies.PolynomialRegressionChannel, inputs: {length: 250, degree: 4, deviations: 1.9}, outputMap: {regression: 'prChannel250_4_19', upper: 'prChannelUpper250_4_19', lower: 'prChannelLower250_4_19'}},
    {study: studies.PolynomialRegressionChannel, inputs: {length: 300, degree: 2, deviations: 1.9}, outputMap: {regression: 'prChannel300_2_19', upper: 'prChannelUpper300_2_19', lower: 'prChannelLower300_2_19'}},
    {study: studies.PolynomialRegressionChannel, inputs: {length: 300, degree: 3, deviations: 1.95}, outputMap: {regression: 'prChannel300_3_195', upper: 'prChannelUpper300_3_195', lower: 'prChannelLower300_3_195'}},
    {study: studies.PolynomialRegressionChannel, inputs: {length: 300, degree: 4, deviations: 2.1}, outputMap: {regression: 'prChannel300_4_21', upper: 'prChannelUpper300_4_21', lower: 'prChannelLower300_4_21'}},
    {study: studies.PolynomialRegressionChannel, inputs: {length: 200, degree: 2}, outputMap: {regression: 'trendPrChannel200_2'}},
    {study: studies.PolynomialRegressionChannel, inputs: {length: 300, degree: 2}, outputMap: {regression: 'trendPrChannel300_2'}},
    {study: studies.PolynomialRegressionChannel, inputs: {length: 400, degree: 2}, outputMap: {regression: 'trendPrChannel400_2'}},
    {study: studies.PolynomialRegressionChannel, inputs: {length: 500, degree: 2}, outputMap: {regression: 'trendPrChannel500_2'}},
    {study: studies.PolynomialRegressionChannel, inputs: {length: 550, degree: 2}, outputMap: {regression: 'trendPrChannel550_2'}}
];

function ReversalsCombinedOverlap() {
    this.constructor = ReversalsCombinedOverlap;
    Base.call(this);

    this.prepareStudies(studyDefinitions);
}

ReversalsCombinedOverlap.prototype = Object.create(Base.prototype);

ReversalsCombinedOverlap.prototype.backtest = function(data, investment, profitability) {
    var self = this;
    var expirationMinutes = 5;
    var putNextTick = false;
    var callNextTick = false;
    var putThisConfiguration = false;
    var callThisConfiguration = false;
    var previousDataPoint;
    var dataPointCount = data.length;
    var previousBalance = 0;

    // For every data point...
    data.forEach(function(dataPoint, index) {
        // Simulate the next tick, and process studies for the tick.
        self.tick(dataPoint);

        if (previousDataPoint && index < dataPointCount - 1) {
            if (putNextTick) {
                // Create a new position.
                self.addPosition(new Put(dataPoint.symbol, (dataPoint.timestamp - 1000), previousDataPoint.close, putInvestment, profitability, expirationMinutes));
            }

            if (callNextTick) {
                // Create a new position.
                self.addPosition(new Call(dataPoint.symbol, (dataPoint.timestamp - 1000), previousDataPoint.close, callInvestment, profitability, expirationMinutes));
            }
        }

        putNextTick = false;
        callNextTick = false;

        putInvestment = 0;
        callInvestment = 0;

        // For every configuration...
        configurations.forEach(function(configuration) {
            putThisConfiguration = true;
            callThisConfiguration = true;

            if (configuration.ema200 && configuration.ema100) {
                if (!dataPoint.ema200 || !dataPoint.ema100) {
                    putThisConfiguration = false;
                    callThisConfiguration = false;
                }

                // Determine if a downtrend is not occurring.
                if (putThisConfiguration && dataPoint.ema200 < dataPoint.ema100) {
                    putThisConfiguration = false;
                }

                // Determine if an uptrend is not occurring.
                if (callThisConfiguration && dataPoint.ema200 > dataPoint.ema100) {
                    callThisConfiguration = false;
                }
            }
            if (configuration.ema100 && configuration.ema50) {
                if (!dataPoint.ema100 || !dataPoint.ema50) {
                    putThisConfiguration = false;
                    callThisConfiguration = false;
                }

                // Determine if a downtrend is not occurring.
                if (putThisConfiguration && dataPoint.ema100 < dataPoint.ema50) {
                    putThisConfiguration = false;
                }

                // Determine if an uptrend is not occurring.
                if (callThisConfiguration && dataPoint.ema100 > dataPoint.ema50) {
                    callThisConfiguration = false;
                }
            }
            if (configuration.ema50 && configuration.sma13) {
                if (!dataPoint.ema50 || !dataPoint.sma13) {
                    putThisConfiguration = false;
                    callThisConfiguration = false;
                }

                // Determine if a downtrend is not occurring.
                if (putThisConfiguration && dataPoint.ema50 < dataPoint.sma13) {
                    putThisConfiguration = false;
                }

                // Determine if an uptrend is not occurring.
                if (callThisConfiguration && dataPoint.ema50 > dataPoint.sma13) {
                    callThisConfiguration = false;
                }
            }
            if (configuration.rsi) {
                if (typeof dataPoint[configuration.rsi.rsi] === 'number') {
                    // Determine if RSI is not above the overbought line.
                    if (putThisConfiguration && dataPoint[configuration.rsi.rsi] <= configuration.rsi.overbought) {
                        putThisConfiguration = false;
                    }

                    // Determine if RSI is not below the oversold line.
                    if (callThisConfiguration && dataPoint[configuration.rsi.rsi] >= configuration.rsi.oversold) {
                        callThisConfiguration = false;
                    }
                }
                else {
                    putThisConfiguration = false;
                    callThisConfiguration = false;
                }
            }
            if (configuration.prChannel) {
                if (dataPoint[configuration.prChannel.upper] && dataPoint[configuration.prChannel.lower]) {
                    // Determine if the upper regression bound was not breached by the high price.
                    if (putThisConfiguration && (!dataPoint[configuration.prChannel.upper] || dataPoint.high <= dataPoint[configuration.prChannel.upper])) {
                        putThisConfiguration = false;
                    }

                    // Determine if the lower regression bound was not breached by the low price.
                    if (callThisConfiguration && (!dataPoint[configuration.prChannel.lower] || dataPoint.low >= dataPoint[configuration.prChannel.lower])) {
                        callThisConfiguration = false;
                    }
                }
                else {
                    putThisConfiguration = false;
                    callThisConfiguration = false;
                }
            }
            if (configuration.trendPrChannel) {
                if (previousDataPoint && dataPoint[configuration.trendPrChannel.regression] && previousDataPoint[configuration.trendPrChannel.regression]) {
                    // Determine if a long-term downtrend is not occurring.
                    if (putThisConfiguration && dataPoint[configuration.trendPrChannel.regression] > previousDataPoint[configuration.trendPrChannel.regression]) {
                        putThisConfiguration = false;
                    }

                    // Determine if a long-term uptrend is not occurring.
                    if (callThisConfiguration && dataPoint[configuration.trendPrChannel.regression] < previousDataPoint[configuration.trendPrChannel.regression]) {
                        callThisConfiguration = false;
                    }
                }
                else {
                    putThisConfiguration = false;
                    callThisConfiguration = false;
                }
            }

            // Determine if there is a significant gap (> 60 seconds) between the current timestamp and the previous timestamp.
            if ((putThisConfiguration || callThisConfiguration) && (!previousDataPoint || (dataPoint.timestamp - previousDataPoint.timestamp) !== 60 * 1000)) {
                putThisConfiguration = false;
                callThisConfiguration = false;
            }

            if (putThisConfiguration) {
                putInvestment += investment;
            }
            if (callThisConfiguration) {
                callInvestment += investment;
            }

            // Determine whether to trade next tick.
            putNextTick = putNextTick || putThisConfiguration;
            callNextTick = callNextTick || callThisConfiguration;
        });

        if (argv.showTrades) {
            if (self.getProfitLoss() !== previousBalance) {
                console.log('BALANCE: $' + self.getProfitLoss());
                console.log();
            }
            previousBalance = self.getProfitLoss();
        }

        // Track the current data point as the previous data point for the next tick.
        previousDataPoint = dataPoint;
    });

    console.log(self.getResults());
};

module.exports = ReversalsCombinedOverlap;