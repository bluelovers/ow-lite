class ArgumentError extends Error
{
	constructor(message, context: Function)
	{
		super(message);

		try
		{
			Error.captureStackTrace(this, context);
		}
		catch (e)
		{
		}
	}

	get name()
	{
		return 'ArgumentError'
	}

	get [Symbol.toStringTag]()
	{
		return this.name
	}
}

export = ArgumentError
