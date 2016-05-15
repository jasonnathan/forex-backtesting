#ifndef OPTIMIZER_H
#define OPTIMIZER_H

#include <cstdlib>
#include <cstdio>
#include <string>
#include <vector>
#include <map>
#include <exception>
#include <thread>
#include <mongoc.h>
#include <bson.h>
#include <bcon.h>
#include <boost/variant.hpp>
#include "maginatics/threadpool/threadpool.h"
#include "studies/study.h"
#include "factories/optimizationStrategyFactory.h"
#include "types/tick.h"
#include "types/configuration.h"

class Optimizer {
    private:
        mongoc_client_t *dbClient;
        std::string strategyName;
        std::string symbol;
        int group;
        int dataCount;
        double **data;
        std::map<std::string, int> dataIndex;
        int getDataPropertyCount();
        bson_t *convertTickToBson(Tick *tick);
        void saveTicks(std::vector<Tick*> ticks);

    protected:
        virtual std::vector<Study*> getStudies() = 0;

    public:
        Optimizer(mongoc_client_t *dbClient, std::string strategyName, std::string symbol, int group);
        virtual ~Optimizer();
        void prepareData(std::vector<Tick*> ticks);
        virtual std::map<std::string, std::vector<std::map<std::string, boost::variant<std::string, double, bool>>>> getConfigurationOptions() = 0;
        std::vector<Configuration*> buildConfigurations(
            std::map<std::string, std::vector<std::map<std::string, boost::variant<std::string, double, bool>>>> options,
            int optionIndex = 0,
            std::vector<Configuration*> results = std::vector<Configuration*>(),
            Configuration *current = nullptr
        );
        void loadData();
        void optimize(std::vector<Configuration*> configurations, double investment, double profitability);
};

#endif
