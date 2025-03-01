﻿// <auto-generated />
using System;
using AwesomeDevEvents.Persistence;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace AwesomeDevEvents.Persistence.Migrations
{
    [DbContext(typeof(DevEventsDbContext))]
    partial class DevEventsDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "9.0.2")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("AwesomeDevEvents.Entities.DevEvents", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Description")
                        .HasMaxLength(300)
                        .HasColumnType("varchar(300)");

                    b.Property<DateTime>("EndDate")
                        .HasColumnType("datetime2")
                        .HasColumnName("End_Date");

                    b.Property<DateTime>("StartDate")
                        .HasColumnType("datetime2")
                        .HasColumnName("Start_Date");

                    b.Property<string>("Title")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("DevEvents");
                });

            modelBuilder.Entity("AwesomeDevEvents.Entities.Speaker", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid>("DevEventId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<int>("LinkedInProfile")
                        .HasColumnType("int");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("TalkDescription")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("TalkTitle")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("DevEventId");

                    b.ToTable("DevEventSpeakers");
                });

            modelBuilder.Entity("AwesomeDevEvents.Entities.Speaker", b =>
                {
                    b.HasOne("AwesomeDevEvents.Entities.DevEvents", null)
                        .WithMany("Speakers")
                        .HasForeignKey("DevEventId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("AwesomeDevEvents.Entities.DevEvents", b =>
                {
                    b.Navigation("Speakers");
                });
#pragma warning restore 612, 618
        }
    }
}
