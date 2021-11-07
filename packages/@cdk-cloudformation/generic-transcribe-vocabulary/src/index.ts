// Generated by cdk-import
import * as cdk from '@aws-cdk/core';

/**
 * A custom vocabulary that you can use to change the way Amazon Transcribe handles transcription of an audio file.
 *
 * @schema CfnVocabularyProps
 */
export interface CfnVocabularyProps {
  /**
   * The language code of the vocabulary entries. For a list of languages and their corresponding language codes, see [What is Amazon Transcribe?](https://docs.aws.amazon.com/transcribe/latest/dg/what-is-transcribe.html).
   *
   * @schema CfnVocabularyProps#LanguageCode
   */
  readonly languageCode: string;

  /**
   * An array of strings that contains the vocabulary entries.
   *
   * @schema CfnVocabularyProps#Phrases
   */
  readonly phrases?: string[];

  /**
   * The S3 location of the text file that contains the definition of the custom vocabulary. The URI must be in the same region as the API endpoint that you are calling.
   *
   * @schema CfnVocabularyProps#VocabularyFileUri
   */
  readonly vocabularyFileUri?: string;

  /**
   * The name of the vocabulary. The name must be unique within an AWS account. The name is case sensitive.
   *
   * @schema CfnVocabularyProps#VocabularyName
   */
  readonly vocabularyName: string;

}

/**
 * Converts an object of type 'CfnVocabularyProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnVocabularyProps(obj: CfnVocabularyProps | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LanguageCode': obj.languageCode,
    'Phrases': obj.phrases?.map(y => y),
    'VocabularyFileUri': obj.vocabularyFileUri,
    'VocabularyName': obj.vocabularyName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */


/**
 * A CloudFormation `Generic::Transcribe::Vocabulary`
 *
 * @cloudformationResource Generic::Transcribe::Vocabulary
 * @stability external
 * @link https://github.com/iann0036/cfn-types/tree/master/generic-transcribe-vocabulary
 */
export class CfnVocabulary extends cdk.CfnResource {
  /**
  * The CloudFormation resource type name for this resource class.
  */
  public static readonly CFN_RESOURCE_TYPE_NAME = "Generic::Transcribe::Vocabulary";

  /**
   * Resource props.
   */
  public readonly props: CfnVocabularyProps;


  /**
   * Create a new `Generic::Transcribe::Vocabulary`.
   *
   * @param scope - scope in which this resource is defined
   * @param id    - scoped id of the resource
   * @param props - resource properties
   */
  constructor(scope: cdk.Construct, id: string, props: CfnVocabularyProps) {
    super(scope, id, { type: CfnVocabulary.CFN_RESOURCE_TYPE_NAME, properties: toJson_CfnVocabularyProps(props)! });

    this.props = props;

  }
}