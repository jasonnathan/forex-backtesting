CC = g++
NVCC = nvcc
CFLAGS = -O3 -std=c++11 -Wall -pedantic
LFLAGS = -L/usr/local/lib -Llib
INCLUDES = -I/usr/include -I/usr/local/include -Iinclude
LIBS = -lgsl -lcblas
BIN = ./bin
OBJDIR = ./obj
OBJECTS = lib/factories/optimizerFactory.o lib/optimizers/reversalsOptimizer.o lib/optimizers/optimizer.o lib/factories/dataParserFactory.o lib/dataParsers/oandaDataParser.o lib/studies/study.o lib/studies/smaStudy.o lib/studies/emaStudy.o lib/studies/rsiStudy.o lib/studies/stochasticOscillatorStudy.o lib/studies/polynomialRegressionChannelStudy.o

all: prepareData optimize

prepareData: src/prepareData.cpp $(OBJECTS)
	@mkdir -p $(BIN)
	$(CC) $(CFLAGS) $(LFLAGS) $(INCLUDES) $(LIBS) -o $(BIN)/$@ src/prepareData.cpp $(addprefix $(OBJDIR)/,$(OBJECTS))

optimize: src/optimize.cpp $(OBJECTS)
	@mkdir -p $(BIN)
	$(CC) $(CFLAGS) $(LFLAGS) $(INCLUDES) $(LIBS) -o $(BIN)/$@ src/optimize.cpp $(addprefix $(OBJDIR)/,$(OBJECTS))

%.o: %.cpp
	@mkdir -p $(OBJDIR)/lib/factories $(OBJDIR)/lib/optimizers $(OBJDIR)/lib/dataParsers $(OBJDIR)/lib/studies
	$(CC) $(CFLAGS) $(INCLUDES) -o $(OBJDIR)/$@ -c $<
clean:
	rm -f $(BIN)/* $(OBJDIR)/*.o
