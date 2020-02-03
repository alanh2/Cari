using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace Blinds
{
    /// <summary>
    /// Summary description for DB
    /// </summary>
    public static class DB
    {
        private static string connString = ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString;


        // private static string connString = "Data Source=SQL5030.SmarterASP.NET;Initial Catalog=DB_A12DC9_safalol;User Id=DB_A12DC9_safalol_admin;Password=Aa123456;";

        public static DataTable GetSp(string SPName, Dictionary<string, string> dic)
        {
            using (SqlConnection conn = new SqlConnection(connString))
            {
                try
                {
                    using (SqlDataAdapter da = new SqlDataAdapter())
                    {
                        da.SelectCommand = new SqlCommand(SPName, conn);
                        da.SelectCommand.CommandType = CommandType.StoredProcedure;

                        foreach (KeyValuePair<string, string> pair in dic)
                        {
                            da.SelectCommand.Parameters.AddWithValue(pair.Key, pair.Value);
                        }

                        DataSet ds = new DataSet();
                        da.Fill(ds, "result_name");

                        DataTable dt = ds.Tables["result_name"];

                        return dt;

                    }
                }
                catch (SqlException ex)
                {
                    Console.WriteLine("SQL Error: " + ex.Message);
                    throw ex;
                }
                catch (Exception e)
                {
                    Console.WriteLine("Error: " + e.Message);
                    throw e;
                }
            }

        }


        public static DataTableCollection GetSpTables(string SPName, Dictionary<string, string> dic)
        {
            using (SqlConnection conn = new SqlConnection(connString))
            {
                try
                {
                    using (SqlDataAdapter da = new SqlDataAdapter())
                    {
                        da.SelectCommand = new SqlCommand(SPName, conn);
                        da.SelectCommand.CommandType = CommandType.StoredProcedure;

                        foreach (KeyValuePair<string, string> pair in dic)
                        {
                            if (pair.Value!=null)
                                da.SelectCommand.Parameters.AddWithValue(pair.Key, pair.Value);
                            else
                                da.SelectCommand.Parameters.AddWithValue(pair.Key, DBNull.Value);

                        }

                        DataSet ds = new DataSet();
                        da.Fill(ds, "result_name");

                        return ds.Tables;

                    }
                }
                catch (SqlException ex)
                {
                    Console.WriteLine("SQL Error: " + ex.Message);
                    throw ex;
                }
                catch (Exception e)
                {
                    Console.WriteLine("Error: " + e.Message);
                    throw e;
                }
            }

        }

        public static void RunSp(string SPName, Dictionary<string, string> dic)
        {
            using (SqlConnection conn = new SqlConnection(connString))
            {
                try
                {
                    using (SqlDataAdapter da = new SqlDataAdapter())
                    {
                        da.SelectCommand = new SqlCommand(SPName, conn);
                        da.SelectCommand.CommandType = CommandType.StoredProcedure;

                        foreach (KeyValuePair<string, string> pair in dic)
                        {
                            da.SelectCommand.Parameters.AddWithValue(pair.Key, pair.Value);
                        }
                        da.SelectCommand.Connection.Open();

                        da.SelectCommand.ExecuteNonQuery();

                        da.SelectCommand.Dispose();
                    }
                }
                catch (SqlException ex)
                {
                    throw ex;

                }
                catch (Exception e)
                {
                    throw e;
                }
            }

        }
    }

}