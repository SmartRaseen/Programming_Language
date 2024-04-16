using Microsoft.Analytics.Interfaces;
using ScopeRuntime;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;


[SqlUserDefinedProcessor]
public class CopyProcessor : Processor
{
    public int limit = 0, i = 0;
    public static int value;
    public static int AddNumbers(int a, int b)
    {
        return a + b;
    }

    public static int GetRowCount()
    {
        return AddNumbers(2, 4);
    }

    public override IEnumerable<Row> Process(RowSet input_rowset, Row output_row, string[] args)
    {
        var inputRows = input_rowset.Rows.ToList();
        var recordCount = inputRows.Count;
        limit = inputRows.Count() * 10 / 100;

        // Split the rowset into chunks of 10 rows each
        List<List<Row>> chunks = SplitIntoChunks(inputRows, limit);

        // Display the chunks
        int chunkNumber = 1;
        foreach (var chunk in chunks)
        {
            Console.WriteLine(chunkNumber);
            foreach (var row in chunk)
            {
                Console.WriteLine(row);
                inputRows[i].CopyTo(output_row);
            }
            Console.WriteLine();
            chunkNumber++;
            output_row["chunk"].Set(chunkNumber);
            yield return output_row;
        }
    }

    private static List<List<T>> SplitIntoChunks<T>(List<T> source, int chunkSize)
    {
        List<List<T>> chunks = new List<List<T>>();
        for (int i = 0; i < source.Count; i += chunkSize)
        {
            chunks.Add(source.Skip(i).Take(chunkSize).ToList());
        }
        return chunks;
    }
}
