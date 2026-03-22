package cmd

import (
	"os"

	"github.com/spf13/cobra"
)

var rootCmd = &cobra.Command{
	Use:   "sqlite",
	Short: "sqlite CLI application (devtools tools)",
	Long:  `The sqlite CLI application is a comprehensive backend utility belonging to the devtools suite of tools.

Use this root executable to manage configuring, running, and interacting with all sqlite-related operations securely and efficiently from your terminal.`,
}

func Execute() {
	if err := rootCmd.Execute(); err != nil {
		os.Exit(1)
	}
}

func init() {
}
