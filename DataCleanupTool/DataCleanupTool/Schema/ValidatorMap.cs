﻿using DataCleanupTool.Model;
using CsvHelper.Configuration;

namespace DataCleanupTool.Schema
{
    public class ValidatorMap: ClassMap<Validator>
    {
        public ValidatorMap() 
        {
            Map(m => m.FileName).Name("FileName");
            Map(m => m.ProductName).Name("ProductName");
            Map(m => m.Validation).Name("Validation");
        }
    }
}
